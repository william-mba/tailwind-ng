import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ClassList, Dropdown, DropdownBase, KBKey, OverlayPosition } from '@tailwind-ng/core';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-content />`,
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DropdownBase, useExisting: forwardRef(() => DropdownComponent) }]
})
export class DropdownComponent extends DropdownBase implements Dropdown {
  @Input() position: OverlayPosition = { top: 'top-2', right: 'right-0' };
  @Input() closeOnBlur = false;

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.init(this.position)
        .then(() => {
          this.classList.set(this.config);
        });
    }
  }
  protected override addEventListeners(): void {
    super.addEventListeners();
    if (this.closeOnBlur) {
      this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    }
    this.nativeElement.addEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    if (this.closeOnBlur) {
      this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
    }
    this.nativeElement.removeEventListener('pointerover', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('pointerleave', this.onPointerEvent.bind(this), false);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected onPointerEvent(event: UIEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    switch (event.type) {
      case 'pointerover':
        if (this.isHovered) return;
        this.isHovered = true;
        break;
      case 'pointerleave':
        if (!this.isHovered) return;
        this.isHovered = false;
        break;
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (KBKey.isEscape(event.key)) {
      this.close();
    }
  }

  protected onBlur(): void {
    setTimeout(() => {
      if (!this.hasFocus) {
        this.close();
      }
    }, 50);
  }
}
