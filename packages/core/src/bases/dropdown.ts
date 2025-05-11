import { Directive, forwardRef } from '@angular/core'
import { PopupDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'
import { Popup } from '../directives'

/**
 * @TailwindNG Dropdown component interface.
 */
export interface Dropdown extends Popup {
  /**
   * Close the dropdown when the user clicks outside of it.
   */
  closeOnBlur?: boolean
}

export const DROPDOWN_CONFIG = InjectionTokenFactory.create<string>('', 'DROPDOWN_CONFIG')

@Directive({
  host: {
    '[attr.tabindex]': '-1',
  },
  providers: [
    {
      provide: PopupDirective,
      useExisting: forwardRef(() => DropdownBase),
    },
  ],
})
export abstract class DropdownBase extends PopupDirective {}

/**
 * Checks if the component is a Dropdown.
 * If so, you can safely access the Dropdown members inside this block scope.
 */
export function isDropdown(component: unknown): component is Dropdown {
  return component instanceof DropdownBase
}
