import { Directive } from '@angular/core';
import { InputRadioToken } from '@ngx-tailwind/core';

@Directive({ // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[tw-input][type="radio"], input[twInput][type="radio"]',
  exportAs: 'twInputRadio',
  providers: [{ provide: InputRadioToken, useExisting: InputRadioDirective }]
})
export class InputRadioDirective extends InputRadioToken {
  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom(config);
    });
  }
}
