import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface InputTextConfig extends ComponentConfig {
  placeholder: Modifier<'placeholder', InputTextConfig>;
  invalid: Modifier<'invalid'>;
};
