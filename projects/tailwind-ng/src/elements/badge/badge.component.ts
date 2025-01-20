import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SizeOption, BadgeBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeBase {
  @Input() size: SizeOption = 'md';

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.set({ b: config.base, s: config[this.size] });
    });
  }
}
