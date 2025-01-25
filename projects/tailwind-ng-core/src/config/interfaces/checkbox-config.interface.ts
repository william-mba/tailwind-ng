import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface CheckboxConfig extends ComponentConfig {
  checked: Modifier<'checked', CheckboxConfig>;
  forcedColors: Modifier<'forced-colors', CheckboxConfig>;
  indeterminate: Modifier<'indeterminate', CheckboxConfig>;
};
