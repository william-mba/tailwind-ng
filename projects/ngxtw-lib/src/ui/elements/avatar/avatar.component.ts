import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { AvatarConfig } from './avatar.config';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent extends ElementBaseDirective<HTMLElement> {
  size = input<SizeOption>('md');

  protected override onInit(): void {
    this.config.get<AvatarConfig>('Avatar').subscribe(config => {
      this.classList.setFrom({ t: config.theme, s: config.size[this.size()] });
    });
  }
}
