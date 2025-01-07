import { ChangeDetectionStrategy, Component, ElementRef, OutputEmitterRef, viewChild, ViewEncapsulation } from '@angular/core';
import { ToggleConfig } from './toggle.config';
import { ToggleState, ToggleActions, ToggleEvents } from './toggle.interface';
import { BaseDirective } from '../../../core/directives/base.directive';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
    '(click)': 'toggle()',
    '[attr.aria-checked]': 'isChecked || null',
    '[attr.checked]': 'isChecked || null',
  },
  template: `
    <input type="checkbox" #checkbox [checked]="isChecked" class="peer" style="height: 0px; width: 0px; opacity: 0%">
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['isChecked'],
  outputs: ['toggled'],
})
export class ToggleComponent extends BaseDirective implements ToggleState, ToggleActions, ToggleEvents {
  protected checkbox = viewChild.required<ElementRef>('checkbox');
  isChecked = false;
  toggled = new OutputEmitterRef<boolean>();

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
