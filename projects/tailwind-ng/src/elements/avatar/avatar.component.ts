import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AvatarBase, SizeOption } from '@tailwind-ng/core';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AvatarBase, useExisting: AvatarComponent }]
})
export class AvatarComponent extends AvatarBase {
  @Input() size: SizeOption = 'md';

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom({ b: config.base, s: config[this.size] });
    });
  }
}
