import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core'
import { Badge, BADGE_CONFIG, BadgeBase, classNameMerge, SizeOption } from '@tailwind-ng/core'

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: BadgeBase, useExisting: BadgeComponent }],
})
export class BadgeComponent extends BadgeBase implements Badge {
  @Input() size: SizeOption = 'md'

  protected override buildStyle(): void {
    const { [this.size]: size, className } = inject(BADGE_CONFIG)
    this.nativeElement.className = classNameMerge(`${size} ${className}`, this.class)
  }
}
