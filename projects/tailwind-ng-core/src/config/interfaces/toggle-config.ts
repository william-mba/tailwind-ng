import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface ToggleConfig extends ComponentConfig {
  before?: Modifier<'before'>;
  dataChecked?: Modifier<'data-checked', ToggleConfig>;
};
