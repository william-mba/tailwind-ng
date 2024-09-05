import { IconSourceConfig } from "./icon-source.config";
import { IconSizeOptions } from "./icon.config";

/**
 * ngxtw Icon
 */
export interface Icon {
  class: string;
  name: string;
  size: keyof IconSizeOptions;
  source: keyof IconSourceConfig;
  setClassNames(value: string): void;
}
