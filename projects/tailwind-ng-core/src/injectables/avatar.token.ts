import { Directive, inject, Input } from "@angular/core";
import { ConfigTypeOf } from "../config/config-type-of";
import { ConfigOf } from "../config/config-of";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const AVATAR_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Avatar'>>>({}, 'AVATAR_CONFIG');

@Directive({})
export abstract class AvatarBase extends BaseDirective implements ConfigOf<'Avatar'> {
  @Input() config = inject(AVATAR_CONFIG);
}
