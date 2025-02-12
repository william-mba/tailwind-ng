import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SizeOption, BadgeBase, Badge, classlist } from '@tailwind-ng/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  host: {
    '[class]': 'classList.value()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeBase implements Badge {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    if (!this.classList) {
      this.classList = classlist(this.class)
        .set({ b: this.config.base, s: this.config[this.size] })
    }
  }
}
