import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupConfig } from './button-group.config';
import { BaseDirective } from '../../../core/directives/base.directive';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent extends BaseDirective {
  protected override onInit(): void {
    this.config.get<ButtonGroupConfig>('ButtonGroup').subscribe((config) => {
      this.classList.setFrom(config);
    });
  }
}
