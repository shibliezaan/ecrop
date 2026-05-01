/* eslint-disable @typescript-eslint/no-explicit-any */
export function downloadPDF(bytes: Uint8Array | number[], filename: string): void {
  const uint8Array = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  
  const blob = new Blob([uint8Array as any], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}