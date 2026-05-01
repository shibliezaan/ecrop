'use client';

import { useState, useRef, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { loadPDF } from '@/lib/pdf/loader';
import { cropPDF } from '@/lib/pdf/cropper';
import { splitFlipkartPDF } from '@/lib/pdf/invoice-splitter';
import { downloadPDF } from '@/lib/export/pdf-export';
import { getPreset, MARKETPLACE_PRESETS } from '@/lib/pdf/presets';

interface UploadZoneProps {
  marketplace: string;
}

type ProcessingState = 'idle' | 'loading' | 'processing' | 'complete' | 'error';

export function UploadZone({ marketplace }: UploadZoneProps) {
  const [file, setFile] = useState<File | null>(null);
  const [selectedPreset, setSelectedPreset] = useState(marketplace);
  const [sortBySKU, setSortBySKU] = useState(marketplace === 'meesho');
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState<ProcessingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ pageCount: number; labelsExtracted: number; invoicesExtracted?: number } | null>(null);
  const [resultBytes, setResultBytes] = useState<Uint8Array | null>(null);
  const [invoiceBytes, setInvoiceBytes] = useState<Uint8Array | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setState('loading');
    setError(null);
    setResult(null);

    try {
      await loadPDF(selectedFile);
      setState('idle');
    } catch (err: any) {
      setState('error');
      setError(err.message);
      setFile(null);
    }
  }, []);

  const handleProcess = useCallback(async () => {
    if (!file) return;

    setState('processing');
    setProgress(0);
    setError(null);

    try {
      const pdfDoc = await loadPDF(file);

      if (selectedPreset === 'flipkart') {
        const splitResult = await splitFlipkartPDF(pdfDoc, (p) => setProgress(p));
        setResultBytes(splitResult.labelsPdf);
        setInvoiceBytes(splitResult.invoicesPdf);
        setResult({
          pageCount: splitResult.totalPages,
          labelsExtracted: splitResult.labelsCount,
          invoicesExtracted: splitResult.invoicesCount,
        });
      } else {
        const cropResult = await cropPDF(pdfDoc, selectedPreset, sortBySKU, (p) => setProgress(p));
        setResultBytes(cropResult.pdfBytes);
        setResult({ pageCount: cropResult.pageCount, labelsExtracted: cropResult.labelsExtracted });
      }
      
      setState('complete');
    } catch (err: any) {
      setState('error');
      setError(err.message);
    }
  }, [file, selectedPreset, sortBySKU]);

  const handleDownloadLabels = useCallback(() => {
    if (!resultBytes) return;
    const timestamp = new Date().toISOString().slice(0, 10);
    downloadPDF(resultBytes, `ecrop-${selectedPreset}-labels-${timestamp}.pdf`);
  }, [resultBytes, selectedPreset]);

  const handleDownloadInvoices = useCallback(() => {
    if (!invoiceBytes) return;
    const timestamp = new Date().toISOString().slice(0, 10);
    downloadPDF(invoiceBytes, `ecrop-${selectedPreset}-invoices-${timestamp}.pdf`);
  }, [invoiceBytes, selectedPreset]);

  const handleReset = useCallback(() => {
    setFile(null);
    setState('idle');
    setProgress(0);
    setError(null);
    setResult(null);
    setResultBytes(null);
    setInvoiceBytes(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <Card className="max-w-xl mx-auto">
      <div className="space-y-6">
        {state === 'idle' && !file && (
          <div
            className="border-2 border-dashed border-gray-200 rounded-notion-md p-12 text-center cursor-pointer hover:border-notion-blue transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <p className="text-[20px] font-semibold text-warm-gray-500 mb-2">
              Drop PDF here
            </p>
            <p className="text-[14px] text-warm-gray-500 mb-4">
              or click to browse
            </p>
            <Button>Choose File</Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>
        )}

        {file && state !== 'complete' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-warm-white rounded-notion">
              <div>
                <p className="text-[15px] font-semibold text-notion-black">{file.name}</p>
                <p className="text-[13px] text-warm-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button onClick={handleReset} className="text-warm-gray-500 hover:text-notion-black text-[14px]">
                Remove
              </button>
            </div>

            <div>
              <label className="text-[14px] font-semibold text-notion-black mb-2 block">
                Select Marketplace
              </label>
              <select
                value={selectedPreset}
                onChange={(e) => {
                  setSelectedPreset(e.target.value);
                  setSortBySKU(e.target.value === 'meesho');
                }}
                className="w-full p-3 border border-gray-200 rounded-notion text-[15px] bg-white"
              >
                {Object.keys(MARKETPLACE_PRESETS).map((key) => (
                  <option key={key} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {selectedPreset === 'meesho' && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBySKU}
                  onChange={(e) => setSortBySKU(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-notion-blue focus:ring-notion-blue"
                />
                <span className="text-[15px] text-warm-gray-500">Sort by SKU</span>
              </label>
            )}

            {state === 'error' && error && (
              <p className="text-red-600 text-[14px]">{error}</p>
            )}

            {state === 'loading' && (
              <p className="text-[14px] text-warm-gray-500">Loading PDF...</p>
            )}

            {state === 'idle' && file && (
              <Button onClick={handleProcess} className="w-full">
                Start Cropping
              </Button>
            )}

            {state === 'processing' && (
              <div className="space-y-2">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-notion-blue transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-[14px] text-warm-gray-500 text-center">
                  Processing... {Math.round(progress)}%
                </p>
              </div>
            )}
          </div>
        )}

        {state === 'complete' && result && (
          <div className="space-y-4 text-center">
            <div className="p-6 bg-warm-white rounded-notion">
              <p className="text-[16px] font-semibold text-notion-black mb-2">
                Cropping Complete!
              </p>
              <p className="text-[14px] text-warm-gray-500">
                {result.labelsExtracted} labels extracted from {result.pageCount} pages
                {result.invoicesExtracted !== undefined && ` • ${result.invoicesExtracted} invoices`}
              </p>
            </div>
            {selectedPreset === 'flipkart' && invoiceBytes ? (
              <div className="grid grid-cols-2 gap-3">
                <Button onClick={handleDownloadLabels} className="w-full">
                  Download Labels
                </Button>
                <button
                  onClick={handleDownloadInvoices}
                  className="w-full py-3 px-4 bg-black/5 hover:bg-black/10 text-notion-black rounded-notion text-[15px] font-semibold transition-colors"
                >
                  Download Invoices
                </button>
              </div>
            ) : (
              <Button onClick={handleDownloadLabels} className="w-full">
                Download PDF
              </Button>
            )}
            <button
              onClick={handleReset}
              className="block w-full text-[14px] text-warm-gray-500 hover:text-notion-black"
            >
              Crop another file
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}