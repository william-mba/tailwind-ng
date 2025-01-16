import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { InputToken } from '@ngx-tailwind/core';

@Component({ // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[tw-input], input[twInput]',
  exportAs: 'twInput',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: InputToken, useExisting: InputComponent }]
})
export class InputComponent extends InputToken {
  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom(config);
    });
  }
}
