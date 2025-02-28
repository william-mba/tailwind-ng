import { ChangeDetectionStrategy, Component, model, ViewEncapsulation } from '@angular/core';
import { AvatarBase, SizeOption, Avatar } from '@tailwind-ng/core';

/**
 * @TailwindNG Avatar Component
 */
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  host: {
    '[class]': 'classList.value()',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AvatarBase, useExisting: AvatarComponent }]
})
export class AvatarComponent extends AvatarBase implements Avatar {
  size = model<SizeOption>('md');

  protected override buildStyle(): void {
    this.classList.set({ ...this.config.base, ...this.config[this.size()] });
  }
}
