import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { AvatarConfig } from './avatar.config';
import { AvatarToken, SizeOption } from '@ngx-tailwind/core';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AvatarToken, useExisting: AvatarComponent }]
})
export class AvatarComponent extends AvatarToken {
  size = input<SizeOption>('md');

  protected override onInit(): void {
    this.config.get<AvatarConfig>('Avatar').subscribe(config => {
      this.classList.setFrom({ b: config.base, s: config[this.size()] });
    });
  }
}
