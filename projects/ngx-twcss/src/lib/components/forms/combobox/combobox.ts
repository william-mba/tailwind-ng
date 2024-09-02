import { EventEmitter } from "@angular/core";
import { ComboboxItem } from "./combobox-item/combobox-item";

/**
 * Ngx-twcss Combobox
 */
export interface Combobox {
  label: string;
  value: string;
  inputClass: string;
  opened: boolean;
  inputMinLength: number;
  width: 'w-64' | 'w-72' | 'w-80' | 'w-96';
  close(): void;
  open(): void;
  select(item: ComboboxItem): void;
  scrollIntoView(item: ComboboxItem): void;
  isSelected(item: ComboboxItem): boolean;
  onChange: EventEmitter<string>;
  onReset: EventEmitter<void>;
  onToggle: EventEmitter<boolean>;
}
