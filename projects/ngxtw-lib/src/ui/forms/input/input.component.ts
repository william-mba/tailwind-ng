import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { InputConfig } from './input.config';
import { BaseDirective } from '../../../core/directives/base.directive';

@Component({
  selector: 'input[tw-input], input[twInput]',
  exportAs: 'twInput',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseDirective<HTMLInputElement> {
  protected override onInit(): void {
    this.config.get<InputConfig>('Input').subscribe(config => {
      this.classList.setFrom(config);
    });
  }
}
