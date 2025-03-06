import { Directive, inject } from "@angular/core";
import { ComboboxItemConfig } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const COMBOBOX_ITEM_CONFIG = InjectionTokenFactory.create<Partial<ComboboxItemConfig>>({}, 'COMBOBOX_ITEM_CONFIG');

@Directive()
export abstract class ComboboxItemBase extends BaseDirective {
  protected config = inject(COMBOBOX_ITEM_CONFIG);
}
