import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonGroupBase, useExisting: ButtonGroupComponent }]
})
export class ButtonGroupComponent extends ButtonGroupBase {
  protected override onInit(): void {
    this.config$.subscribe((config) => this.classList.set(config));
  }
}
