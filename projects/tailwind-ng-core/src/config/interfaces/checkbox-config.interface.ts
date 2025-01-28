import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface CheckboxConfig extends ComponentConfig {
  checked: Variant<'checked', CheckboxConfig>;
  forcedColors: Variant<'forced-colors', CheckboxConfig>;
  indeterminate: Variant<'indeterminate', CheckboxConfig>;
};
