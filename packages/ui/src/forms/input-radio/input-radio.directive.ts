import { Directive, inject } from '@angular/core'
import {
  classlist,
  INPUT_RADIO_CONFIG,
  InputRadioBase,
} from '@tailwind-ng/core'

@Directive({
  selector: 'input[type="radio"][tw-input], input[type="radio"][twInput]',
  exportAs: 'twInputRadio',
  providers: [{ provide: InputRadioBase, useExisting: InputRadioDirective }],
})
export class InputRadioDirective extends InputRadioBase {
  protected override buildStyle(): void {
    classlist(this.nativeElement).set(inject(INPUT_RADIO_CONFIG), this.class)
  }
}
