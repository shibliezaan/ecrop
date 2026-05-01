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
      const tempBytes = await tempPdf.save();

      const src = await PDFDocument.load(tempBytes);
      const srcPage0 = src.getPage(0);
      const { width: pw, height: ph } = srcPage0.getSize();

      const x = FLIPKART_CROP.x;
      const y = FLIPKART_CROP.y;
      const w = FLIPKART_CROP.width;
      const h = FLIPKART_CROP.height;

      const out = await PDFDocument.create();
      const newPage = out.addPage([w, h]);
      const embedded = await out.embedPage(srcPage0);

      const yFromBottom = ph - y - h;

      newPage.drawPage(embedded, {
        x: -x,
        y: -yFromBottom,
        width: pw,
        height: ph
      });

      const outBytes = await out.save();
      const outPdf = await PDFDocument.load(outBytes);
      const [croppedPage] = await labelsPdf.copyPages(outPdf, [0]);
      labelsPdf.addPage(croppedPage);

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