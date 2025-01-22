import { Directive } from '@angular/core';
import { InputCheckboxBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[type="checkbox"][tw-input], input[type="checkbox"][twInput]',
  exportAs: 'twInputCheckbox',
  providers: [{ provide: InputCheckboxBase, useExisting: InputCheckboxDirective }]
})
export class InputCheckboxDirective extends InputCheckboxBase {
  protected override onInit(): void {
    this.config$.subscribe(config => this.classList.set(config.input));
  }
}
