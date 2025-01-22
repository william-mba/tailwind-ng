import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface InputRadioConfig extends ComponentConfig {
  forcedColors: Modifier<'forced-colors', InputRadioConfig>;
  checked: Modifier<'checked', InputRadioConfig>;
  before?: Modifier<'before', InputRadioConfig>;
  disabled: Modifier<'disabled', InputRadioConfig>;
};
