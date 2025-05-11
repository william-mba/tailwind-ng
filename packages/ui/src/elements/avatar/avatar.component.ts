import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core'
import {
  Avatar,
  AVATAR_CONFIG,
  AvatarBase,
  classlist,
  SizeOption,
} from '@tailwind-ng/core'

/**
 * @TailwindNG Avatar Component
 */
@Component({
  selector: 'tw-avatar, [tw-avatar], [twAvatar]',
  exportAs: 'twAvatar',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AvatarBase, useExisting: AvatarComponent }],
})
export class AvatarComponent extends AvatarBase implements Avatar {
  @Input() size: SizeOption = 'md'

  protected override buildStyle(): void {
    const { [this.size]: size, className } = inject(AVATAR_CONFIG)
    classlist(this.nativeElement).set(`${size} ${className}`, this.class)
  }
}
