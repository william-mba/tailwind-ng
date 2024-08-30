import { DropdownConfig } from "./dropdown.config";

interface DropdownState {
  class: string;
  opened: boolean;
}

interface DropdownActions {
  toggle(): void;
  open(): void;
  close(): void;
  setConfig(config: Partial<DropdownConfig>): void;
}

export interface DropdownAPI extends DropdownState, DropdownActions { }
