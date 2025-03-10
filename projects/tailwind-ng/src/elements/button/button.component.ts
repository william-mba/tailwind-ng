import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BUTTON_CONFIG, ButtonBase, classlist, Str } from '@tailwind-ng/core';

/**
 * @TailwindNG Button component
 */
@Component({
  selector: 'tw-button, [tw-button], [twButton]',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonBase, useExisting: ButtonComponent }]
})
export class ButtonComponent extends ButtonBase {

  protected override buildStyle(): void {
    const config = inject(BUTTON_CONFIG);
    const className = Str.resolve([config[this.size], config[this.variant]]);
    this.nativeElement.className = classlist(this.class).set(className).value;
    if (this.isFab) {
      this.nativeElement.classList.add(config.fab ?? '');
    }
  }
}
