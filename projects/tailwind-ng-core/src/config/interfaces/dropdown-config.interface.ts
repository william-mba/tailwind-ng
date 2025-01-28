import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface DropdownConfig extends ComponentConfig {
  open: Variant<'open'>
  notOpen: Variant<'not-open'>
  starting: Variant<'starting', DropdownConfig>
};
