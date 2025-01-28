import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface ToggleConfig extends ComponentConfig {
  before?: Variant<'before'>;
  dataChecked?: Variant<'data-checked', ToggleConfig>;
};
