import { Directive, forwardRef, inject } from "@angular/core";
import { ConfigTypeOf } from "../config";
import { PopupDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Dialog } from "../interfaces/dialog";

export const DIALOG_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'Dialog'>>({}, 'DIALOG_CONFIG');

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogBase) }] })
export abstract class DialogBase extends PopupDirective<HTMLDialogElement> {
  protected config = inject(DIALOG_CONFIG);
}

/**
 * Checks if the component is a Dialog.
 * If so, you can safely access the Dialog members inside this block scope.
 */
export function isDialog(component: unknown): component is Dialog {
  return component instanceof DialogBase;
}
