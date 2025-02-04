import { Directive, forwardRef, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";

export const DIALOG_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Dialog'>>>({}, 'DIALOG_CONFIG');

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogBase) }] })
export abstract class DialogBase extends PopupDirective<HTMLDialogElement> implements ConfigOf<'Dialog'> {
  readonly type = 'Dialog';
  @Input() config = inject(DIALOG_CONFIG);
}
