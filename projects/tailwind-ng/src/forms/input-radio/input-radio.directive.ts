import { Directive } from '@angular/core';
import { classlist, InputRadio, InputRadioBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[type="radio"][tw-input], input[type="radio"][twInput]',
  exportAs: 'twInputRadio',
  host: {
    '[class]': 'classList.value()',
  },
  providers: [{ provide: InputRadioBase, useExisting: InputRadioDirective }]
})
export class InputRadioDirective extends InputRadioBase implements InputRadio {
  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = classlist(this.class).set(this.config);
    }
  }
}
