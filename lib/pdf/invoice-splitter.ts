import { PDFDocument } from 'pdf-lib';
import { getPreset } from './presets';
import { renderPageToCanvas } from './loader';

export interface InvoiceSplitResult {
  labelsPdf: Uint8Array;
  invoicesPdf: Uint8Array;
  labelsCount: number;
  invoicesCount: number;
  totalPages: number;
}

async function getPageDimensions(page: any): Promise<{ width: number; height: number }> {
  const viewport = page.getViewport({ scale: 1 });
  return { width: viewport.width, height: viewport.height };
}

async function cropPageToBox(
  page: any,
  pageWidth: number,
  pageHeight: number,
  cropBox: { x: number; y: number; width: number; height: number }
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

async function canvasToPng(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  const pngBytes = await new Promise<Uint8Array>((resolve) => {
    canvas.toBlob((blob) => {
      blob!.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)));
    }, 'image/png');
  });
  return pngBytes;
}

export async function splitFlipkartPDF(
  pdfDoc: any,
  onProgress?: (progress: number) => void
): Promise<InvoiceSplitResult> {
  const preset = getPreset('flipkart');
  const numPages = pdfDoc.numPages;

  const labelsPdf = await PDFDocument.create();
  const invoicesPdf = await PDFDocument.create();

  labelsPdf.setTitle('Flipkart Labels');
  invoicesPdf.setTitle('Flipkart Invoices');

  let labelsCount = 0;
  let invoicesCount = 0;

  const labelBox = preset.labelBox!;
  const invoiceBox = preset.invoiceBox!;

  for (let i = 0; i < numPages; i++) {
    const pageNum = i + 1;
    const page = await pdfDoc.getPage(pageNum);
    const { width, height } = await getPageDimensions(page);

    const labelCanvas = await cropPageToBox(page, width, height, labelBox);
    const labelPng = await canvasToPng(labelCanvas);
    const labelImage = await labelsPdf.embedPng(labelPng);

    const labelPage = labelsPdf.addPage([preset.labelWidth, preset.labelHeight]);
    labelPage.drawImage(labelImage, {
      x: 0,
      y: 0,
      width: preset.labelWidth,
      height: preset.labelHeight,
    });
    labelsCount++;

    const invoiceCanvas = await cropPageToBox(page, width, height, invoiceBox);
    const invoicePng = await canvasToPng(invoiceCanvas);
    const invoiceImage = await invoicesPdf.embedPng(invoicePng);

    const A4_WIDTH = 595.28;
    const A4_HEIGHT = 841.89;
    const invoicePage = invoicesPdf.addPage([A4_WIDTH, A4_HEIGHT]);
    invoicePage.drawImage(invoiceImage, {
      x: 0,
      y: 0,
      width: A4_WIDTH,
      height: A4_HEIGHT,
    });
    invoicesCount++;

    if (onProgress) {
      onProgress(((i + 1) / numPages) * 100);
    }
  }

  return {
    labelsPdf: new Uint8Array(await labelsPdf.save()),
    invoicesPdf: new Uint8Array(await invoicesPdf.save()),
    labelsCount,
    invoicesCount,
    totalPages: numPages,
  };
}