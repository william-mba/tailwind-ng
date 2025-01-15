import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { BadgeConfig } from './badge.config';
import { SizeOption, BadgeToken } from '@ngxtw/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeToken, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeToken {
  size = input<SizeOption>('md');

  protected override onInit(): void {
    this.config.get<BadgeConfig>('Badge').subscribe(config => {
      this.classList.setFrom({ b: config.base, s: config[this.size()] });
    });
  }
}
