import { ChangeDetectionStrategy, Component, Input, output, ViewEncapsulation } from '@angular/core';
import { ClassList, Toggle, ToggleBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
    '[class]': 'classList.value()',
    '[tabindex]': 'isDisabled ? null : tabIndex',
    '[attr.aria-checked]': 'isChecked || null',
    '[attr.data-checked]': 'isChecked || null',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ToggleBase, useExisting: ToggleComponent }]
})
export class ToggleComponent extends ToggleBase implements Toggle {
  @Input() isChecked = false;
  @Input() tabIndex = 0;
  checked = output<boolean>();
  protected override  async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set(this.config);
    }
  }

  private onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  toggle(): void {
    this.focus();
    this.isChecked = !this.isChecked;
    this.checked.emit(this.isChecked);
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('click', this.toggle.bind(this), { passive: true, capture: true });
    this.nativeElement.addEventListener('keyup', this.onKeydown.bind(this), true);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('click', this.toggle.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeydown.bind(this), true);
  }
}
