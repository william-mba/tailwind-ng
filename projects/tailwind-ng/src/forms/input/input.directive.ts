import { Directive } from '@angular/core';
import { InputBase } from '@tailwind-ng/core';

@Directive({
  selector: 'input[tw-input][type="text"], input[twInput][type="text"], input[tw-input][type="password"], input[twInput][type="password"], input[tw-input][type="email"], input[twInput][type="number"], input[twInput][type="tel"], input[twInput][type="url"]',
  exportAs: 'twInput',
  providers: [{ provide: InputBase, useExisting: InputDirective }]
})
export class InputDirective extends InputBase {
  protected override onInit(): void {
    this.config$.subscribe(config => this.classList.set(config));
  }
}
