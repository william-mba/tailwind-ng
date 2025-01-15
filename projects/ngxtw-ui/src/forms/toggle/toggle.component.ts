import { ChangeDetectionStrategy, Component, ElementRef, Input, Output, OutputEmitterRef, viewChild, ViewEncapsulation } from '@angular/core';
import { ToggleConfig } from './toggle.config';
import { Toggle } from './toggle.interface';
import { ToggleToken } from '@ngxtw/core';

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
  protected checkbox = viewChild.required<ElementRef>('checkbox');
  @Input() isChecked = false;
  @Input() tabIndex = 0;
  @Output() toggled = new OutputEmitterRef<boolean>();

  protected override onInit(): void {
    this.nativeElement.addEventListener('focus', () => {
      this.checkbox().nativeElement.focus();
    }, { once: true, passive: true, capture: true });

    this.config.get<ToggleConfig>('Toggle').subscribe(config => {
      this.classList.setFrom(config);
    });
  }

  toggle(): void {
    this.nativeElement.focus();
    this.isChecked = !this.isChecked;
    this.toggled.emit(this.isChecked);
  }
}
