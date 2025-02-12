import { Directive } from '@angular/core';
import { InputTextBase, InputText, ClassList } from '@tailwind-ng/core';

@Directive({
  selector: 'input[tw-input][type="text"], input[twInput][type="text"], input[tw-input][type="password"], input[twInput][type="password"], input[tw-input][type="email"], input[twInput][type="number"], input[twInput][type="tel"], input[twInput][type="url"]',
  exportAs: 'twInput',
  host: {
    '[class]': 'classList.value()',
  },
  providers: [{ provide: InputTextBase, useExisting: InputTextDirective }]
})
export class InputTextDirective extends InputTextBase implements InputText {
  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = new ClassList(this.class).set(this.config);
    }
  }
}
