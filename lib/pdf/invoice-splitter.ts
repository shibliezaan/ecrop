import { PDFDocument } from 'pdf-lib';
import { getPageDimensions, renderPageToCanvas } from './loader';

export const FLIPKART_CROP = {
  x: 181.9,
  y: 61.9,
  width: 231.3,
  height: 309.6
};

export interface InvoiceSplitResult {
  labelsPdf: Uint8Array;
  invoicesPdf: Uint8Array;
  labelsCount: number;
  invoicesCount: number;
  totalPages: number;
}

async function canvasToPng(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      blob!.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)));
    }, 'image/png');
  });
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
      const scale = 3.0;
      const fullCanvas = await renderPageToCanvas(page, scale);

      const cropX = FLIPKART_CROP.x * scale;
      const cropY = FLIPKART_CROP.y * scale;
      const cropW = FLIPKART_CROP.width * scale;
      const cropH = FLIPKART_CROP.height * scale;

      const cropped = document.createElement('canvas');
      cropped.width = cropW;
      cropped.height = cropH;

      const ctx = cropped.getContext('2d')!;
      ctx.drawImage(fullCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      const pngBytes = await canvasToPng(cropped);
      const image = await labelsPdf.embedPng(pngBytes);

      const newPage = labelsPdf.addPage([FLIPKART_CROP.width, FLIPKART_CROP.height]);
      newPage.drawImage(image, {
        x: 0,
        y: 0,
        width: FLIPKART_CROP.width,
        height: FLIPKART_CROP.height
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