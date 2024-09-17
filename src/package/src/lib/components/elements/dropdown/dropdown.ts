import { EventEmitter } from "@angular/core";
import { DropdownConfig } from "./dropdown.config";

/**
 * ngxtw Dropdown
 */
export interface Dropdown {
  readonly class: string;
  readonly opened: boolean;
  readonly config: DropdownConfig;
  toggle(): void;
  open(): void;
  close(): void;
  setConfig(config: Partial<DropdownConfig>): void;
  onToggle: EventEmitter<boolean>
}
