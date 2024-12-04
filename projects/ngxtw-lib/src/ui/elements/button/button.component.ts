import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model } from '@angular/core';
import { ButtonConfig, ButtonVariant } from './button.config';
import { Button } from './button.interface';
import { ElementBase } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

/**
 * @ngxtw Button component
 */
@Component({
  selector: 'button[tw-button], button[twButton], tw-button',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ElementBase<HTMLButtonElement> implements Button {
  isFab = input(false);
  variant = model<ButtonVariant>('primary');

  protected override buildStyle(): void {
    this._config.get<ButtonConfig>('Button').subscribe((config) => {
      const obj = {
        v: config[this.variant()],
        s: config.size[this.size()],
        f: this.isFab() ? config.fab : {}
      };
      this.classList.setFrom(obj);
    });
  }
}
