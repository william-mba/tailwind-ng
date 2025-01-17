import { Directive } from '@angular/core';
import { InputToken } from '@ngx-tailwind/core';

@Directive({ // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[tw-input][type="text"], input[twInput][type="text"], input[tw-input][type="password"], input[twInput][type="password"], input[tw-input][type="email"], input[twInput][type="number"], input[twInput][type="tel"], input[twInput][type="url"]',
  exportAs: 'twInput',
  providers: [{ provide: InputToken, useExisting: InputDirective }]
})
export class InputDirective extends InputToken {
  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom(config);
    });
  }
}
