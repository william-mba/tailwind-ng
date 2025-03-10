import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { Badge, BADGE_CONFIG, BadgeBase, classlist, SizeOption } from '@tailwind-ng/core';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }]
})
export class BadgeComponent extends BadgeBase implements Badge {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    const config = inject(BADGE_CONFIG);
    const className = `${config[this.size]} ${config.className}`;
    this.nativeElement.className = classlist(this.class).set(className).value;
  }
}
