import { LayoutConfig } from "./layout-config.type";


export interface SizeOptions {
  xs: Partial<LayoutConfig>;
  sm: Partial<LayoutConfig>;
  md: Partial<LayoutConfig>;
  lg: Partial<LayoutConfig>;
  xl: Partial<LayoutConfig>;
};

export type SizeOption = keyof SizeOptions;
