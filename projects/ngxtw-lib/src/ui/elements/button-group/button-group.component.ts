import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupConfig } from './button-group.config';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent extends ElementBaseDirective {
  protected override onInit(): void {
    this._config.get<ButtonGroupConfig>('ButtonGroup').subscribe((config) => {
      this.classList.setFrom(config);
    });
  }
}
