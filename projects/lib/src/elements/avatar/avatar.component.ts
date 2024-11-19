import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { AVATAR_SIZE_CONFIG, AvatarConfig } from './avatar.config';
import { Avatar } from './avatar.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';
import { SizeOption } from '../../core/types/size-options.type';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  standalone: true,
  host: {
    '[attr.size]': 'size'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent extends ElementBaseDirective<HTMLElement> implements Avatar {
  private readonly _sizeConfig = inject(AVATAR_SIZE_CONFIG);
  @Input() size: SizeOption = 'md';

  setSize(value: SizeOption): void {
    this.size = value;
    this.buildStyle();
  }

  protected override buildStyle(): void {
    this._configManager.get<AvatarConfig>('Avatar').subscribe(config => {
      this.classList.setFrom({ c: config, s: this._sizeConfig[this.size] });
    })
  }
}
