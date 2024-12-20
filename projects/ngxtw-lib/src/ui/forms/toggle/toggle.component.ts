import { ChangeDetectionStrategy, Component, ElementRef, OutputEmitterRef, viewChild, ViewEncapsulation } from '@angular/core';
import { ToggleConfig } from './toggle.config';
import { Toggle } from './toggle.interface';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';

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
export class ToggleComponent extends ElementBaseDirective implements Toggle {
  protected checkbox = viewChild.required<ElementRef>('checkbox');
  isChecked = false;
  toggled = new OutputEmitterRef<boolean>();

  protected override onInit(): void {
    this.nativeElement.focus = () => this.checkbox().nativeElement.focus();
    this.config.get<ToggleConfig>('Toggle').subscribe(config => {
      this.classList.setFrom(config);
    });
  }

  toggle(): void {
    // Prevent toggling when disabled
    if (this.isDisabled) return;
    this.nativeElement.focus();
    this.isChecked = !this.isChecked;
    this.toggled.emit(this.isChecked);
  }
}
