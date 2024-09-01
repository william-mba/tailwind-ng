import { EventEmitter } from "@angular/core";

/**
 * Ngx-twcss Combobox Item
 */
export interface ComboboxItem {
  id: string;
  value: string;
  selected: boolean;
  select(): void;
  scrollIntoView(): void;
  onSelect: EventEmitter<ComboboxItem>;
}
