import { Directive } from '@angular/core';
import { InputRadioBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[tw-input][type="radio"], input[twInput][type="radio"]',
  exportAs: 'twInputRadio',
  providers: [{ provide: InputRadioBase, useExisting: InputRadioDirective }]
})
export class InputRadioDirective extends InputRadioBase {
  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.set(config);
    });
  }
}
