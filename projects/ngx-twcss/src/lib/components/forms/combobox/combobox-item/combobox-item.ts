import { EventEmitter } from "@angular/core";
import { Combobox } from "../combobox";

/**
 * Ngx-twcss Combobox Item
 */
export interface ComboboxItem {
  id: string;
  value: string;
  combobox: Combobox;
  selected: boolean;
  element: HTMLElement;
  onSelect: EventEmitter<ComboboxItem>;
}
