import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface InputTextConfig extends ComponentConfig {
  placeholder: Variant<'placeholder', InputTextConfig>;
  invalid: Variant<'invalid'>;
};
