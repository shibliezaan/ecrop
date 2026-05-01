import * as pdfjs from 'pdfjs-dist';

const SKU_PATTERNS = [
  /SKU:\s*([A-Z0-9\-_]+)/i,
  /Item:\s*([A-Z0-9\-_]+)/i,
  /Product:\s*([A-Z0-9\-_]+)/i,
  /Code:\s*([A-Z0-9\-_]+)/i,
  /ID:\s*([A-Z0-9\-_]+)/i,
  /\b([A-Z]{2,3}[0-9]{4,})\b/i,
  /\b([0-9]{6,})\b/i,
];

export interface PageWithSKU {
  pageNum: number;
  sku: string | null;
}

export async function extractSKU(page: pdfjs.PDFPageProxy): Promise<string | null> {
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

export function sortPagesBySKU(pages: PageWithSKU[]): PageWithSKU[] {
  const sorted = [...pages].sort((a, b) => {
    if (!a.sku && !b.sku) return 0;
    if (!a.sku) return 1;
    if (!b.sku) return -1;
    return a.sku.localeCompare(b.sku);
  });

  return sorted;
}

export function groupPagesBySKU(pages: PageWithSKU[]): Map<string, PageWithSKU[]> {
  const groups = new Map<string, PageWithSKU[]>();
  
  for (const page of pages) {
    const key = page.sku || 'unknown';
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(page);
  }

  const sortedKeys = Array.from(groups.keys()).sort();
  const result = new Map<string, PageWithSKU[]>();
  for (const key of sortedKeys) {
    result.set(key, groups.get(key)!);
  }

  return result;
}