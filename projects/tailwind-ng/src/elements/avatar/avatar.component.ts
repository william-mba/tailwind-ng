import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AvatarBase, SizeOption, Avatar, ClassList } from '@tailwind-ng/core';

/**
 * @TailwindNG Avatar Component
 */
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AvatarBase, useExisting: AvatarComponent }]
})
export class AvatarComponent extends AvatarBase implements Avatar {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = new ClassList(this.class)
        .set({ b: this.config.base, s: this.config[this.size] })
    }
  }
}
