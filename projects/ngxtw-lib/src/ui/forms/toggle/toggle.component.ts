import { ChangeDetectionStrategy, Component, input, model, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToggleConfig } from './toggle.config';
import { Toggle } from './toggle.interface';
import { BaseDirective } from '../../../core/directives/element-base.directive';
import { ClassName } from '../../../core/types/class-name.type';
import { ClassList } from '../../../config/classlist';

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
      state('on', style({ transform: 'translateX(100%)' })),
      state('off', style({ transform: 'translateX(0)' })),
      transition('on <=> off', [animate('150ms ease-in-out')])
    ])
  ],
  template: `
  <span [class]="sliderClassList.value" [@slide]="isChecked() ? 'on': 'off'">
    <ng-content />
  </span>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent extends BaseDirective implements Toggle {
  readonly sliderClassList: ClassList = new ClassList();
  isChecked = model<boolean>(false, { alias: 'checked' });
  slider = input<ClassName[]>([]);

  protected override onInit(): void {
    this.sliderClassList.base = this.slider() as string[];
    this._config.get<ToggleConfig>('Toggle').subscribe(config => {
      this.classList.setFrom(config.container);
      this.sliderClassList.setFrom(config.slider);
    });
  }

  toggle(): void {
    // Prevent toggling when disabled
    if (this.isDisabled()) return;
    this.isChecked.set(!this.isChecked());
  }
}
