import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface DropdownConfig extends ComponentConfig {
  open: Modifier<'open'>
  notOpen: Modifier<'not-open'>
  starting: Modifier<'starting', DropdownConfig>
};
