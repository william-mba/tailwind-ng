import { ChangeDetectionStrategy, Component, inject, model, ViewEncapsulation } from '@angular/core';
import { AVATAR_SIZE_CONFIG, AvatarConfig } from './avatar.config';
import { ElementBase } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent extends ElementBase<HTMLElement> {
  private readonly _sizeConfig = inject(AVATAR_SIZE_CONFIG);
  override size = model<SizeOption>('md');

  protected override buildStyle(): void {
    this.size.subscribe((value) => {
      this.classList.base.next([this._sizeConfig[value]]);
    })

    this._config.get<AvatarConfig>('Avatar').subscribe(config => {
      this.classList.updateFrom(config);
    });
  }
}
