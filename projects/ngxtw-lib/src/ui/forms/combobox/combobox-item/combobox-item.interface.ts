import { InputSignal, OutputEmitterRef } from "@angular/core";
import { BaseElement } from "../../../../core/directives/element-base.interface";
import { Combobox } from "../combobox.interface";


/**
 * @ngxtw Combobox Item
 */
export interface ComboboxItem extends BaseElement {
  readonly value: InputSignal<string>;
  readonly isSelected: boolean;
  readonly combobox: InputSignal<Combobox>;
  select(): void;
  scrollIntoView(): void;
  selected: OutputEmitterRef<ComboboxItem>;
}
