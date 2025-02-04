import { Directive, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const ICON_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Icon'>>>({}, 'ICON_CONFIG');

@Directive({})
export abstract class IconBase extends BaseDirective implements ConfigOf<'Icon'> {
  @Input() config = inject(ICON_CONFIG);
}
