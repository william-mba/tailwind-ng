import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { SizeOption, BadgeToken } from '@ngx-tailwind/core';

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
    this.config$.subscribe(config => {
      this.classList.setFrom({ b: config.base, s: config[this.size()] });
    });
  }
}
