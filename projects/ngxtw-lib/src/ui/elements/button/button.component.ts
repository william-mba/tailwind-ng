import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonConfig, ButtonVariant } from './button.config';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';
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
  inputs: ['isFab', 'size', 'variant'],
})
export class ButtonComponent extends ElementBaseDirective<HTMLButtonElement> {
  isFab = false;
  size: SizeOption = 'md';
  variant: ButtonVariant = 'primary';

  protected override onInit(): void {
    this._config.get<ButtonConfig>('Button').subscribe((config) => {
      this.classList.setFrom({
        ...config.size[this.size],
        ...config.theme[this.variant],
        ...this.isFab ? config.theme.fab : {}
      });
    });
  }
}
