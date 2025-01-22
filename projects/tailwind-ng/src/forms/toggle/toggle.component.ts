import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, Output, OutputEmitterRef, ViewEncapsulation } from '@angular/core';
import { Toggle } from './toggle.interface';
import { ToggleBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
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
  private readonly destroyRef = inject(DestroyRef);
  @Input() isChecked = false;
  @Input() tabIndex = 0;
  @Output() checked = new OutputEmitterRef<boolean>();

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.set(config);
    });
    this.nativeElement.addEventListener('click', this.toggle.bind(this), { passive: true, capture: true });
    this.nativeElement.addEventListener('keydown', this.onKeydown.bind(this), true);

    this.destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('click', this.toggle.bind(this), true);
      this.nativeElement.removeEventListener('keydown', this.onKeydown.bind(this), true);
    });
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
}
