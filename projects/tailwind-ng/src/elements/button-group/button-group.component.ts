import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroup, ButtonGroupBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  host: {
    '[class]': 'classList.value',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonGroupBase, useExisting: ButtonGroupComponent }]
})
export class ButtonGroupComponent extends ButtonGroupBase implements ButtonGroup {
  protected override buildStyle(): void {
    this.classList.set(this.config);
  }
}
