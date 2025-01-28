import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface ComboboxItemConfig extends ComponentConfig {
  ariaSelected: Variant<'aria-selected'>;
};
