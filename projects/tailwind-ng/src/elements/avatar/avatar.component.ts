import { ChangeDetectionStrategy, Component, model, ViewEncapsulation } from '@angular/core';
import { AvatarBase, SizeOption, Avatar, classlist } from '@tailwind-ng/core';

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
  size = model<SizeOption>('md');

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set({ ...this.config.base, ...this.config[this.size()] })
  }
}
