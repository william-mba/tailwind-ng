import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core'
import { BUTTON_CONFIG, ButtonBase, classNameMerge } from '@tailwind-ng/core'

/**
 * @TailwindNG Button component
 */
@Component({
  selector: 'tw-button, [tw-button], [twButton]',
  exportAs: 'twButton',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ButtonBase, useExisting: ButtonComponent }],
})
export class ButtonComponent extends ButtonBase {
  protected override buildStyle(): void {
    const { fab, base, [this.size]: size, [this.variant]: variant } = inject(BUTTON_CONFIG)
    this.nativeElement.className = classNameMerge(`${size} ${variant}`, base, this.class)
    if (this.isFab) {
      this.nativeElement.classList.add(fab ?? '')
    }
  }
}
