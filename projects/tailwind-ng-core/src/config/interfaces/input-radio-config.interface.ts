import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface InputRadioConfig extends ComponentConfig {
  forcedColors: Variant<'forced-colors', InputRadioConfig>;
  checked: Variant<'checked', InputRadioConfig>;
  before?: Variant<'before', InputRadioConfig>;
  disabled: Variant<'disabled', InputRadioConfig>;
};
