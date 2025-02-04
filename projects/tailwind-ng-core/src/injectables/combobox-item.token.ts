import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const COMBOBOX_ITEM_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'ComboboxItem'>>>({}, 'COMBOBOX_ITEM_CONFIG');

@Directive({})
export abstract class ComboboxItemBase extends BaseDirective implements ConfigOf<'ComboboxItem'> {
  @Input() config = inject(COMBOBOX_ITEM_CONFIG);
}
