import * as pdfjs from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';

interface CropBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Preset {
  labelsPerPage: number;
  layout: string;
  cropBoxes: CropBox[];
  labelWidth: number;
  labelHeight: number;
}

const PRESETS: Record<string, Preset> = {
  amazon: {
    labelsPerPage: 4,
    layout: '2x2',
    cropBoxes: [
      { x: 0, y: 0, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0, width: 0.5, height: 0.5 },
      { x: 0, y: 0.5, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0.5, width: 0.5, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  flipkart: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  meesho: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
};

const SKU_PATTERNS = [
  /SKU:\s*([A-Z0-9\-_]+)/i,
  /Item:\s*([A-Z0-9\-_]+)/i,
  /Product:\s*([A-Z0-9\-_]+)/i,
  /Code:\s*([A-Z0-9\-_]+)/i,
  /ID:\s*([A-Z0-9\-_]+)/i,
  /\b([A-Z]{2,3}[0-9]{4,})\b/i,
];

async function extractSKU(page: any): Promise<string | null> {
  try {
    const textContent = await page.getTextContent();
    const fullText = textContent.items
      .map((item: any) => item.str)
      .join(' ')
      .trim();

    if (!fullText) return null;

    for (const pattern of SKU_PATTERNS) {
      const match = fullText.match(pattern);
      if (match && match[1]) {
        return match[1].toUpperCase();
      }
    }

    return null;
  } catch {
    return null;
  }
}

function sortPagesBySKU(pages: { pageNum: number; sku: string | null }[]): { pageNum: number; sku: string | null }[] {
  return [...pages].sort((a, b) => {
    if (!a.sku && !b.sku) return 0;
    if (!a.sku) return 1;
    if (!b.sku) return -1;
    return a.sku.localeCompare(b.sku);
  });
}

async function renderPage(page: any, scale: number): Promise<HTMLCanvasElement> {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas;
}

async function cropPage(
  page: any,
  pageWidth: number,
  pageHeight: number,
  cropBox: CropBox
): Promise<HTMLCanvasElement> {
  const scale = 2.0;
  const canvas = await renderPage(page, scale);
  const x = cropBox.x * pageWidth * scale;
  const y = cropBox.y * pageHeight * scale;
  const w = cropBox.width * pageWidth * scale;
  const h = cropBox.height * pageHeight * scale;
  
  const cropped = document.createElement('canvas');
  cropped.width = w;
  cropped.height = h;
  const ctx = cropped.getContext('2d')!;
  ctx.drawImage(canvas, x, y, w, h, 0, 0, w, h);
  return cropped;
}

async function canvasToPngBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  const blob = await new Promise<Blob>((resolve) => {
    canvas.toBlob((b) => {
      if (b) resolve(b);
      else resolve(new Blob());
    }, 'image/png');
  });
  return new Uint8Array(await blob.arrayBuffer());
}

self.onmessage = async (e: MessageEvent) => {
  const { fileData, preset, sortBySKU } = e.data;
  
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    
    const pdf = await pdfjs.getDocument({ data: fileData }).promise;
    const presetConfig = PRESETS[preset] || PRESETS.amazon;
    const newPdf = await PDFDocument.create();
    
    let pageOrder: number[] = [];

    if (sortBySKU && preset === 'meesho') {
      const pagesWithSKU: { pageNum: number; sku: string | null }[] = [];
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const sku = await extractSKU(page);
        pagesWithSKU.push({ pageNum, sku });
      }
      const sorted = sortPagesBySKU(pagesWithSKU);
      pageOrder = sorted.map(p => p.pageNum);
      
      const skusFound = [...new Set(sorted.filter(p => p.sku).map(p => p.sku))];
      if (skusFound.length > 0) {
        newPdf.setTitle(`Meesho Labels - SKUs: ${skusFound.join(', ')}`);
      }
    } else {
      pageOrder = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
    }
    
    let totalLabels = 0;
    
    for (let i = 0; i < pageOrder.length; i++) {
      const pageNum = pageOrder[i];
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      const { width, height } = { width: viewport.width, height: viewport.height };
      
      for (const cropBox of presetConfig.cropBoxes) {
        const croppedCanvas = await cropPage(page, width, height, cropBox);
        const imageBytes = await canvasToPngBytes(croppedCanvas);
        
        const pngImage = await newPdf.embedPng(imageBytes);
        const newPage = newPdf.addPage([presetConfig.labelWidth, presetConfig.labelHeight]);
        newPage.drawImage(pngImage, {
          x: 0,
          y: 0,
          width: presetConfig.labelWidth,
          height: presetConfig.labelHeight,
        });
        
        totalLabels++;
      }
      
      self.postMessage({ type: 'progress', progress: ((i + 1) / pageOrder.length) * 100 });
    }
    
    const pdfBytes = await newPdf.save();
    
    self.postMessage({
      type: 'complete',
      result: {
        pdfBytes: Array.from(pdfBytes),
        pageCount: pdf.numPages,
        labelsExtracted: totalLabels,
      },
    });
  } catch (error: any) {
    self.postMessage({ type: 'error', error: error.message });
  }
};