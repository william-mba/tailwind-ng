import { ChangeDetectionStrategy, Component, ElementRef, model, viewChild, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToggleConfig } from './toggle.config';
import { Toggle } from './toggle.interface';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  host: {
    role: 'switch',
    '(click)': 'toggle()',
    '[attr.aria-checked]': 'isChecked() || null',
  },
  animations: [
    trigger('slide', [
      state('off', style({ transform: 'translateX(0)' })),
      state('on', style({ transform: 'translateX(100%)' })),
      transition('on <=> off', [animate('150ms ease-in-out')])
    ])
  ],
  template: `<input type="checkbox" #checkbox [checked]="isChecked()" style="height: 0px; width: 0px; opacity: 0%">
  <span [@slide]="isChecked() ? 'on': 'off'">
    <ng-content />
  </span>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent extends ElementBaseDirective implements Toggle {
  protected checkbox = viewChild.required<ElementRef>('checkbox');
  isChecked = model<boolean>(false, { alias: 'checked' });

  protected override onInit(): void {
    this.nativeElement.focus = () => this.checkbox().nativeElement.focus();
    this._config.get<ToggleConfig>('Toggle').subscribe(config => {
      this.classList.setFrom(config);
    });
  }

  toggle(): void {
    // Prevent toggling when disabled
    if (this.isDisabled()) return;
    this.nativeElement.focus();
    this.isChecked.set(!this.isChecked());
  }
}
