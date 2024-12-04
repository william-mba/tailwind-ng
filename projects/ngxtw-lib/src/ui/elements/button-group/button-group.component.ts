import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupConfig } from './button-group.config';
import { ButtonGroup } from './button-group.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  standalone: true,
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent extends ElementBaseDirective<HTMLElement> implements ButtonGroup {

  protected override buildStyle(): void {
    this._configManager.get<ButtonGroupConfig>('ButtonGroup').subscribe((config) => {
      this.classList.setFrom(config);
    });
  }
}
