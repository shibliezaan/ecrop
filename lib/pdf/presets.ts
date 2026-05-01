export interface CropBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Preset {
  labelsPerPage: number;
  layout: '2x2' | '1x2' | '1x1';
  cropBoxes: CropBox[];
  labelWidth: number;
  labelHeight: number;
  invoiceBox?: CropBox;
  labelBox?: CropBox;
  hasInvoiceSplit?: boolean;
}

export const MARKETPLACE_PRESETS: Record<string, Preset> = {
  amazon: {
    labelsPerPage: 4,
    layout: '2x2',
    cropBoxes: [
      { x: 0, y: 0, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0, width: 0.5, height: 0.5 },
      { x: 0, y: 0.5, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0.5, width: 0.5, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  flipkart: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
    invoiceBox: { x: 0, y: 0.5, width: 1, height: 0.5 },
    labelBox: { x: 0, y: 0, width: 1, height: 0.5 },
    hasInvoiceSplit: true,
  },
  meesho: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  myntra: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  snapdeal: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
  glowroad: {
    labelsPerPage: 2,
    layout: '1x2',
    cropBoxes: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
    labelWidth: 288,
    labelHeight: 432,
  },
};

export function getPreset(marketplace: string): Preset {
  return MARKETPLACE_PRESETS[marketplace] || MARKETPLACE_PRESETS.amazon;
}