import { PDFDocument } from 'pdf-lib';
import { renderPageToCanvas, getPageDimensions } from './loader';

export const FLIPKART_A4_CROP = {
  x: 194.3,
  y: 67.7,
  width: 210.2,
  height: 290.4
};

const THERMAL_WIDTH = 224.81;
const THERMAL_HEIGHT = 310.82;

export interface InvoiceSplitResult {
  labelsPdf: Uint8Array;
  invoicesPdf: Uint8Array;
  labelsCount: number;
  invoicesCount: number;
  totalPages: number;
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
  const numPages = pdfDoc.numPages;

  const labelsPdf = await PDFDocument.create();
  const invoicesPdf = await PDFDocument.create();

  labelsPdf.setTitle('Flipkart Labels');
  invoicesPdf.setTitle('Flipkart Invoices');

  let labelsCount = 0;
  let invoicesCount = 0;

  for (let i = 0; i < numPages; i++) {
    const pageNum = i + 1;
    const page = await pdfDoc.getPage(pageNum);
    const { width, height } = await getPageDimensions(page);

    const isA4 = width > 590;

    if (isA4) {
      const scale = 2.0;
      const fullCanvas = await renderPageToCanvas(page, scale);

      const cropX = FLIPKART_A4_CROP.x * scale;
      const cropY = FLIPKART_A4_CROP.y * scale;
      const cropW = FLIPKART_A4_CROP.width * scale;
      const cropH = FLIPKART_A4_CROP.height * scale;

      const cropped = document.createElement('canvas');
      cropped.width = cropW;
      cropped.height = cropH;

      const ctx = cropped.getContext('2d')!;
      ctx.drawImage(fullCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      const pngBytes = await canvasToPng(cropped);
      const image = await labelsPdf.embedPng(pngBytes);

      const newPage = labelsPdf.addPage([THERMAL_WIDTH, THERMAL_HEIGHT]);
      newPage.drawImage(image, {
        x: 0,
        y: 0,
        width: THERMAL_WIDTH,
        height: THERMAL_HEIGHT
      });
      
      labelsCount++;
    } else {
      const [copiedPage] = await labelsPdf.copyPages(pdfDoc, [pageNum - 1]);
      labelsPdf.addPage(copiedPage);
      labelsCount++;
    }

    invoicesPdf.addPage([595.28, 841.89]);
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