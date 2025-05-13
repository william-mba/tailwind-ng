import { Directive, inject } from '@angular/core'
import { classNameMerge, INPUT_RADIO_CONFIG, InputRadioBase } from '@tailwind-ng/core'

@Directive({
  selector: 'input[type="radio"][tw-input], input[type="radio"][twInput]',
  exportAs: 'twInputRadio',
  providers: [
    {
      provide: InputRadioBase,
      useExisting: InputRadioDirective,
    },
  ],
})
export class InputRadioDirective extends InputRadioBase {
  protected override buildStyle(): void {
    this.nativeElement.className = classNameMerge(inject(INPUT_RADIO_CONFIG), this.class)
  }
}
