import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroup, ButtonGroupBase, classlist } from '@tailwind-ng/core';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonGroupBase, useExisting: ButtonGroupComponent }]
})
export class ButtonGroupComponent extends ButtonGroupBase implements ButtonGroup {
  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = classlist(this.class).set(this.config);
    }
  }
}
