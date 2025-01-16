import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface ToggleConfig extends ComponentConfig {
  hasChecked: Modifier<'has-checked'>;
};
