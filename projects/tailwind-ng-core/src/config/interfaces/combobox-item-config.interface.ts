import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface ComboboxItemConfig extends ComponentConfig {
  ariaSelected: Modifier<'aria-selected'>;
};
