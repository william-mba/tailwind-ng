import { EventEmitter } from "@angular/core";
import { ElementBaseActions, ElementBaseState } from "../../../core/bases/element-base.interface";
import { ComboboxActions } from "../combobox.interface";

export interface ComboboxItemState extends ElementBaseState<HTMLElement> {
  readonly value: string;
  readonly selected: boolean;
  readonly combobox: ComboboxActions;
}

export interface ComboboxItemActions extends ElementBaseActions {
  select(): void;
  scrollIntoView(): void;
}

export interface ComboboxItemEvents {
  onSelect: EventEmitter<ComboboxItem>;
}


/**
 * @ngxtw Combobox Item
 */
export interface ComboboxItem extends ComboboxItemState, ComboboxItemActions, ComboboxItemEvents { }
