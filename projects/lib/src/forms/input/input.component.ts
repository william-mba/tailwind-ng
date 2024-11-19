import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { InputConfig } from './input.config';
import { TwInput } from './input.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';

@Component({
  selector: 'input[tw-input], input[twInput]',
  exportAs: 'twInput',
  standalone: true,
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends ElementBaseDirective<HTMLInputElement> implements TwInput {
  protected override buildStyle(): void {
    this._configManager.get<InputConfig>('Input')
      .subscribe(config => {
        this.classList.setFrom(config);
      });
  }
}
