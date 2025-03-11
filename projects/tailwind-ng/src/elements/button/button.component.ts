import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BUTTON_CONFIG, ButtonBase, classlist } from '@tailwind-ng/core';

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
    const { base, [this.size]: size, [this.variant]: variant, fab } = inject(BUTTON_CONFIG);
    this.nativeElement.className = classlist(base).set(`${size} ${variant}`).with(this.class);
    if (this.isFab) {
      this.nativeElement.classList.add(fab ?? '');
    }
  }
}
