import { Directive, forwardRef, Input } from "@angular/core";
import { PopupDirective } from "../directives";
import { Combobox } from "../interfaces/combobox";
import { isArrowUp } from "../guards";

/**
 * Checks if the component is a Combobox.
 * If so, you can safely access the Combobox members inside this block scope.
 */
export function isCombobox(component: unknown): component is Combobox {
  return component instanceof ComboboxBase;
}

@Directive({
  host: {
    role: 'combobox',
    '[attr.aria-expanded]': 'opened',
    '[attr.aria-activedescendant]': 'activeElement?.textContent || null',
  },
  providers: [
    {
      provide: PopupDirective,
      useExisting: forwardRef(() => ComboboxBase)
    }
  ]
})
export abstract class ComboboxBase extends PopupDirective {
  activeElement?: HTMLElement;
  @Input() override id = this.randomId('combobox');

  // Override default keyboard event prevention.
  protected override onKeyboardEvent(event: Event): void {
    this.preventInteractionIfDisabled(event);
  }

  // prevent the cursor to move left inside the input when pressing the arrow up key.
  protected onKeydown(event: KeyboardEvent): void {
    if (isArrowUp(event.key)) {
      event.preventDefault();
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('keydown', this.onKeydown.bind(this), true);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('keydown', this.onKeydown.bind(this), true);
  }
}
