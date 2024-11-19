import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, booleanAttribute } from '@angular/core';
import { ButtonConfig, ButtonVariant } from './button.config';
import { Button } from './button.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';
import { SizeOption } from '../../core/types/size-options.type';

/**
 * @ngxtw Button component
 */
@Component({
  selector: 'button[tw-button], button[twButton], tw-button',
  standalone: true,
  exportAs: 'twButton',
  host: {
    '[attr.size]': 'size',
    '[attr.fab]': 'isFab || null',
    '[attr.variant]': 'variant',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ElementBaseDirective<HTMLButtonElement> implements Button {
  /**Whether it is a floating action button or not. Default is `false`*/
  @Input({ transform: booleanAttribute, alias: 'fab' }) isFab: boolean = false;

  @Input() variant: ButtonVariant = 'primary';
  setVariant(value: ButtonVariant): void {
    this.variant = value;
    this.buildStyle();
  }

  @Input() size: SizeOption = 'md';
  setSize(value: SizeOption): void {
    this.size = value;
    this.buildStyle();
  }

  protected override buildStyle(): void {
    this._configManager.get<ButtonConfig>('Button').subscribe((config) => {
      const obj = { v: config[this.variant], s: config.size[this.size] };
      if (this.isFab) {
        Object.assign(obj, config.fab);
      }
      this.classList.setFrom(obj);
    });
  }
}
