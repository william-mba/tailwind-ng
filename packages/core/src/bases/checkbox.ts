import { Directive, OutputEmitterRef } from '@angular/core'
import { BaseDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'
import { SizeOption } from '../types/size-options.type'

/**
 * The mutable properties of the checkbox.
 */
export interface CheckboxMutableProps {
  /**
   * Whether the checkbox is checked. default is false
   */
  readonly checked: boolean
  /**
   * Whether the checkbox is indeterminate. default is false
   */
  readonly indeterminate?: boolean
  /**
   * The checkbox's children if any.
   */
  readonly children?: Checkbox[]
}

export interface CheckboxActions {
  /**
   * Toggles the checkbox from origin.
   * @param options The options for the toggle.
   * @returns A promise that resolves with the changes.
   */
  toggle(options?: CheckboxToggleOptions): void
}

export interface CheckboxEvents {
  /**
   * Emits when the checkbox state changes.
   */
  readonly changes: OutputEmitterRef<CheckboxMutableProps>
  /**
   * Emits when the checkbox checked state changes.
   */
  readonly checkedChange: OutputEmitterRef<boolean>
  /**
   * Emits when the checkbox indeterminate state changes.
   */
  readonly indeterminateChange: OutputEmitterRef<boolean>
}

type EventOrigin = 'self' | 'parent' | 'child'
export interface CheckboxToggleOptions {
  /**
   * The origin of the event. Default is `'self'`.
   */
  origin?: EventOrigin
  /**
   * The event that triggered the toggle.
   */
  event?: Event
}

export interface Checkbox
  extends CheckboxActions,
    CheckboxEvents,
    CheckboxMutableProps {
  readonly id: string
  readonly inputRef: HTMLInputElement
}

/**
 * The icon to display when the checkbox is indeterminate or checked.
 * Default is `{ indeterminate: 'minus', checked: 'check' }`
 */
export interface CheckboxIcon {
  /**
   * The name of the icon to display when the checkbox is indeterminate.
   * Default is `'minus'`. The icon must be configured. Otherwise, it will not display.
   */
  onIndeterminate: string
  /**
   * The name of the icon to display when the checkbox is checked.
   * Default is `'check'`. The icon must be configured. Otherwise, it will not display.
   */
  onChecked: string
  /**
   * The size of the icon. Default is `'sm'`.
   */
  size: SizeOption
}

export const CHECKBOX_CONFIG = InjectionTokenFactory.create<string>(
  '',
  'CHECKBOX_CONFIG'
)

export const CHECKBOX_ICON = InjectionTokenFactory.create<CheckboxIcon>(
  {
    onIndeterminate: 'minus',
    onChecked: 'check',
    size: 'sm',
  },
  'CHECKBOX_ICON'
)

@Directive()
export abstract class CheckboxBase extends BaseDirective {
  protected parent: CheckboxBase | null = null
}

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component instanceof CheckboxBase
}
