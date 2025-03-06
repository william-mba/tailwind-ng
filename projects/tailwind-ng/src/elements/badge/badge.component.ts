import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SizeOption, BadgeBase, Badge } from '@tailwind-ng/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  host: {
    '[class]': 'classList.value',
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeBase implements Badge {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    this.classList.set({ ...this.config.base, ...this.config[this.size] })
  }
}
