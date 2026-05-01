import * as pdfjs from 'pdfjs-dist';

const MAX_FILE_SIZE = 50 * 1024 * 1024;

if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export interface PDFDocumentProxy {
  numPages: number;
  getPage: (num: number) => Promise<any>;
  getMetadata: () => Promise<{ info?: { encrypted?: boolean } }>;
}

export async function loadPDF(file: File): Promise<PDFDocumentProxy> {
  if (file.type !== 'application/pdf') {
    throw new Error('Invalid file type. Please upload a PDF file.');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File too large. Maximum size is 50MB.');
  }

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

  const metadata = await pdf.getMetadata() as any;
  if (metadata.info?.encrypted) {
    throw new Error('Password-protected PDFs are not supported.');
  }

  return pdf;
}

export async function getPageDimensions(page: any): Promise<{ width: number; height: number }> {
  const viewport = page.getViewport({ scale: 1 });
  return { width: viewport.width, height: viewport.height };
}

export async function renderPageToCanvas(
  page: any,
  scale: number = 2.0
): Promise<HTMLCanvasElement> {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;
  
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({
    canvasContext: context,
    viewport,
  }).promise;

  return canvas;
}