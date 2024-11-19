import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { Badge } from './badge.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';
import { SizeOption } from '../../core/types/size-options.type';
import { BADGE_SIZE_CONFIG } from './badge.config';

@Component({
  standalone: true,
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  host: {
    '[attr.size]': 'size || null'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent extends ElementBaseDirective<HTMLElement> implements Badge {
  private readonly _sizeConfig = inject(BADGE_SIZE_CONFIG);
  @Input() size?: SizeOption;

  setSize(value: SizeOption): void {
    this.size = value;
    this.buildStyle();
  }

  protected override buildStyle(): void {
    if (this.size) {
      this.classList.init([this._sizeConfig[this.size]]);
    }
    this._configManager.get('Badge')
      .subscribe(config => {
        this.classList.setFrom(config);
      });
  }
}
