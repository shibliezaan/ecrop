import { PDFDocument } from 'pdf-lib';
import { getPageDimensions } from './loader';

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
      const tempPdf = await PDFDocument.create();
      const [srcPage] = await tempPdf.copyPages(pdfDoc, [pageNum - 1]);
      tempPdf.addPage(srcPage);
      await tempPdf.save();

      const cropped = await labelsPdf.embedPages([srcPage], [{
        left: FLIPKART_CROP.x,
        bottom: height - FLIPKART_CROP.y - FLIPKART_CROP.height,
        right: FLIPKART_CROP.x + FLIPKART_CROP.width,
        top: height - FLIPKART_CROP.y
      }]);
      const croppedPage = cropped[0];

      const newPage = labelsPdf.addPage([FLIPKART_CROP.width, FLIPKART_CROP.height]);
      newPage.drawPage(croppedPage, {
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