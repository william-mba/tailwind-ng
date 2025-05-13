import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core'
import {
  classNameMerge,
  Dropdown,
  DROPDOWN_CONFIG,
  DropdownBase,
  isEscape,
  TwIf,
} from '@tailwind-ng/core'

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: ` <ng-container *twIf="isOpened()"><ng-content /></ng-container> `,
  imports: [TwIf],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DropdownBase,
      useExisting: forwardRef(() => DropdownComponent),
    },
  ],
})
export class DropdownComponent extends DropdownBase implements Dropdown {
  @Input() closeOnBlur?: boolean

  protected override buildStyle(): void {
    this.nativeElement.className = classNameMerge(inject(DROPDOWN_CONFIG), this.class)
  }

  protected override addEventListeners(): void {
    super.addEventListeners()
    if (this.closeOnBlur) {
      this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true)
    }
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false)
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners()
    if (this.closeOnBlur) {
      this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true)
    }
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false)
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      this.close()
    }
  }

  protected onBlur(): void {
    setTimeout(() => {
      if (!this.hasFocus) {
        this.close()
      }
    }, 50)
  }
}
