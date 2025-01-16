import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupToken } from '@ngx-tailwind/core';

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonGroupToken, useExisting: ButtonGroupComponent }]
})
export class ButtonGroupComponent extends ButtonGroupToken {
  protected override onInit(): void {
    this.config$.subscribe((config) => {
      this.classList.setFrom(config);
    });
  }
}
