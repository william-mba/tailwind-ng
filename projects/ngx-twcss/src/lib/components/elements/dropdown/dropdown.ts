import { EventEmitter } from "@angular/core";
import { DropdownConfig } from "./dropdown.config";

/**
 * Ngx-twcss Dropdown
 */
export interface Dropdown {
  class: string;
  opened: boolean;
  toggle(): void;
  open(): void;
  close(): void;
  setConfig(config: Partial<DropdownConfig>): void;
  onToggle: EventEmitter<boolean>
}
