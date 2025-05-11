import { Directive } from '@angular/core'
import { BaseDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'
import { ModelSignal } from '@angular/core'
import { BaseActions, BaseProps } from '../directives'

export interface Toggle extends BaseProps, BaseActions {
  readonly tabIndex: number
  /**
   * Toggles the toggle's state.
   */
  toggle(): void
  /**
   * The toggle's state. Default is `false`.
   * Emits the state's changes when toggled.
   */
  checked: ModelSignal<boolean>
}
/**
 * Checks if the component is a Toggle.
 * If so, you can safely access the Toggle members inside this block scope.
 */
export function isToggle(component: unknown): component is Toggle {
  return component instanceof ToggleBase
}

export const TOGGLE_CONFIG = InjectionTokenFactory.create<string>('', 'TOGGLE_CONFIG')

@Directive()
export abstract class ToggleBase extends BaseDirective {}
