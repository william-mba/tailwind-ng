import { ButtonGroupConfig } from "./button-group.config";
/**
 * Ngx-twcss Button Group
 */
export interface ButtonGroup {
  class: string;
  setConfig(config: Partial<ButtonGroupConfig>): void;
}
