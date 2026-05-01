import { PDFDocument } from 'pdf-lib';
import { getPreset, CropBox } from './presets';
import { renderPageToCanvas } from './loader';
import { extractSKU, sortPagesBySKU, PageWithSKU } from './sku-sort';

export interface CropResult {
  pdfBytes: Uint8Array;
  pageCount: number;
  labelsExtracted: number;
}

export async function cropPDF(
  pdfDoc: any,
  marketplace: string,
  sortBySKU: boolean = false,
  onProgress?: (progress: number) => void
): Promise<CropResult> {
  const preset = getPreset(marketplace);
  const numPages = pdfDoc.numPages;
  
  const newPdf = await PDFDocument.create();
  
  let pageOrder: number[] = [];

  if (sortBySKU && marketplace === 'meesho') {
    const pagesWithSKU: PageWithSKU[] = [];
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
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
    pageOrder = Array.from({ length: numPages }, (_, i) => i + 1);
  }

  let totalLabels = 0;
  
  for (let i = 0; i < pageOrder.length; i++) {
    const pageNum = pageOrder[i];
    const page = await pdfDoc.getPage(pageNum);
    const { width, height } = await getPageDimensions(page);
    
    for (const cropBox of preset.cropBoxes) {
      const croppedCanvas = await cropPageToBox(page, width, height, cropBox);
      const imageBytes = await canvasToPng(croppedCanvas);
      
      const newPage = newPdf.addPage([preset.labelWidth, preset.labelHeight]);
      newPage.drawImage(imageBytes, {
        x: 0,
        y: 0,
        width: preset.labelWidth,
        height: preset.labelHeight,
      });
      
      totalLabels++;
    }
    
    if (onProgress) {
      onProgress(((i + 1) / pageOrder.length) * 100);
    }
  }
  
  const pdfBytes = await newPdf.save();
  
  return {
    pdfBytes: new Uint8Array(pdfBytes),
    pageCount: numPages,
    labelsExtracted: totalLabels,
  };
}

async function getPageDimensions(page: any): Promise<{ width: number; height: number }> {
  const viewport = page.getViewport({ scale: 1 });
  return { width: viewport.width, height: viewport.height };
}

async function cropPageToBox(
  page: any,
  pageWidth: number,
  pageHeight: number,
  cropBox: CropBox
): Promise<HTMLCanvasElement> {
  const scale = 2.0;
  const canvas = await renderPageToCanvas(page, scale);
  
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

async function canvasToPng(canvas: HTMLCanvasElement): Promise<any> {
  const pngBytes = await new Promise<Uint8Array>((resolve) => {
    canvas.toBlob((blob) => {
      blob!.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)));
    }, 'image/png');
  });
  
  return pngBytes;
}