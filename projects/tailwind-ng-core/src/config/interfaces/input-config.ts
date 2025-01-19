import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface InputConfig extends ComponentConfig {
  placeholder: Modifier<'placeholder', InputConfig>;
  invalid: Modifier<'invalid'>;
};
