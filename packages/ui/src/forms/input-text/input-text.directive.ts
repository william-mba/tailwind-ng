import { Directive, inject } from '@angular/core'
import { classNameMerge, INPUT_TEXT_CONFIG, InputTextBase } from '@tailwind-ng/core'

@Directive({
  selector: `input[tw-input][type="text"], input[twInput][type="text"],
  input[tw-input][type="password"], input[twInput][type="password"],
  input[tw-input][type="email"], input[twInput][type="email"],
  input[tw-input][type="number"], input[twInput][type="number"],
  input[tw-input][type="tel"], input[twInput][type="tel"],
  input[tw-input][type="url"], input[twInput][type="url"]`,
  exportAs: 'twInputText',
  providers: [
    {
      provide: InputTextBase,
      useExisting: InputTextDirective,
    },
  ],
})
export class InputTextDirective extends InputTextBase {
  protected override buildStyle(): void {
    const { [this.size]: size, className } = inject(INPUT_TEXT_CONFIG)
    this.nativeElement.className = classNameMerge(`${size} ${className}`, this.class)
  }
}
