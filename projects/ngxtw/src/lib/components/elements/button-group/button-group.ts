import { ButtonGroupConfig } from "./button-group.config";
/**
 * ngxtw Button Group
 */
export interface ButtonGroup {
  class: string;
  setConfig(config: Partial<ButtonGroupConfig>): void;
}
