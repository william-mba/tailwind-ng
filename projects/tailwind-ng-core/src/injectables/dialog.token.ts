import { Directive, forwardRef, inject, Input } from "@angular/core";
import { ConfigOf, ConfigTypeOf } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Dialog } from "../interfaces/dialog";

export const DIALOG_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Dialog'>>>({}, 'DIALOG_CONFIG');

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogBase) }] })
export abstract class DialogBase extends PopupDirective<HTMLDialogElement> implements ConfigOf<'Dialog'> {
  readonly type = 'Dialog';
  @Input() config = inject(DIALOG_CONFIG);
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isDialog(component: unknown): component is Dialog {
  return component instanceof DialogBase;
}
