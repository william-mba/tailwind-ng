import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { BadgeConfig } from './badge.config';
import { ElementBaseDirective } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent extends ElementBaseDirective<HTMLElement> {
  size = input<SizeOption>('md');

  protected override onInit(): void {
    this.config.get<BadgeConfig>('Badge').subscribe(config => {
      this.classList.updateFrom({
        t: config.theme,
        s: config.size[this.size()]
      });
    });
  }
}
