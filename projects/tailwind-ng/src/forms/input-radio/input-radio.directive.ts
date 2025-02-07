import { Directive } from '@angular/core';
import { ClassList, InputRadio, InputRadioBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[type="radio"][tw-input], input[type="radio"][twInput]',
  exportAs: 'twInputRadio',
  host: {
    '[class]': 'classList.value()',
  },
  providers: [{ provide: InputRadioBase, useExisting: InputRadioDirective }]
})
export class InputRadioDirective extends InputRadioBase implements InputRadio {
  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.set(this.config);
    }
  }
}
