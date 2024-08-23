import { Directive, inject, Input, OnInit } from '@angular/core';
import { toClassNames, mergeClassNames } from '../../../core/helpers/config.helper';
import { AVATAR_CONFIG, AvatarConfig, AvatarSizeOptions } from './avatar.config';

/**Avatar element*/
@Directive({
  selector: 'tw-avatar, [tw-avatar]',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class Avatar implements OnInit {
  @Input() class!: string;
  @Input() size: keyof AvatarSizeOptions = 'md';
  private config: AvatarConfig = inject(AVATAR_CONFIG);

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<AvatarConfig>): void {
    this.class = mergeClassNames(toClassNames({ ...config, size: AvatarSizeOptions[this.size] }), this.class);
  }
}
