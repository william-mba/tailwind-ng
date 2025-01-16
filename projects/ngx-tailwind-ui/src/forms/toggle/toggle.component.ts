import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, Input, Output, OutputEmitterRef, viewChild, ViewEncapsulation } from '@angular/core';
import { Toggle } from './toggle.interface';
import { ToggleToken } from '@ngx-tailwind/core';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
    '(click)': 'toggle()',
    '[tabindex]': 'isDisabled ? null : tabIndex',
    '[attr.aria-checked]': 'isChecked || null',
    '[attr.checked]': 'isChecked || null',
  },
  template: `
    <input type="checkbox" #checkbox [checked]="isChecked" class="peer" style="height: 0px; width: 0px; opacity: 0%">
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ToggleToken, useExisting: ToggleComponent }]
})
export class ToggleComponent extends ToggleToken implements Toggle {
  private readonly checkbox = viewChild.required<ElementRef>('checkbox');
  private readonly destroyRef = inject(DestroyRef);
  @Input() isChecked = false;
  @Input() tabIndex = 0;
  @Output() toggled = new OutputEmitterRef<boolean>();

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom(config);
    });
    this.nativeElement.addEventListener('click', this.toggle.bind(this), { passive: true, capture: true });
    this.nativeElement.addEventListener('keydown', this.onKeydown.bind(this), { passive: true, capture: true });
    this.nativeElement.addEventListener('focus', this.focusCheckbox.bind(this), { passive: true, capture: true });

    this.destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('click', this.toggle.bind(this), true);
      this.nativeElement.removeEventListener('keydown', this.onKeydown.bind(this), true);
      this.nativeElement.removeEventListener('focus', this.focusCheckbox.bind(this), true);
    });
  }

  private focusCheckbox(): void {
    this.checkbox().nativeElement.focus();
  }

  private onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
    }
  }

  toggle(): void {
    this.nativeElement.focus();
    this.isChecked = !this.isChecked;
    this.toggled.emit(this.isChecked);
  }
}
