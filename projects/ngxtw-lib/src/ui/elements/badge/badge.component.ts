import { ChangeDetectionStrategy, Component, inject, model, ViewEncapsulation } from '@angular/core';
import { BADGE_SIZE_CONFIG } from './badge.config';
import { ElementBase } from '../../../core/directives/element-base.directive';
import { SizeOption } from '../../../core/types/size-options.type';

@Component({
  selector: 'tw-badge, [tw-badge], [twBadge]',
  exportAs: 'twBadge',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent extends ElementBase<HTMLElement> {
  private readonly _sizeConfig = inject(BADGE_SIZE_CONFIG);
  override size = model<SizeOption>('md');

  protected override buildStyle(): void {
    this.size.subscribe((value) => {
      this.classList.base.next([this._sizeConfig[value]]);
    })
    this._config.get('Badge').subscribe(config => {
      this.classList.updateFrom(config);
    });
  }
}
