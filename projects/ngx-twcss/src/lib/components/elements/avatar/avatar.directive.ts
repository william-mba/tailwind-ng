import { Directive, inject, Input, OnInit } from '@angular/core';
import { toClassNames, mergeClassNames } from '../../../core/helpers/config.helper';
import { AVATAR_CONFIG, AvatarConfig, AvatarSizeOptions } from './avatar.config';
import { Avatar } from './avatar';

/**Avatar element*/
@Directive({
  selector: 'tw-avatar, [tw-avatar]',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class AvatarDirective implements OnInit, Avatar {
  private readonly config: AvatarConfig = inject(AVATAR_CONFIG);
  
  @Input() class!: string;
  @Input() size: keyof AvatarSizeOptions = 'md';

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<AvatarConfig>): void {
    this.class = mergeClassNames(toClassNames({ ...config, size: AvatarSizeOptions[this.size] }), this.class);
  }
}
