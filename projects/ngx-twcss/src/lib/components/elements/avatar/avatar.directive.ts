import { Directive, Input, OnInit } from '@angular/core';
import { ElementConfig } from '../../../core/types/element.config';
import { toClassNames, mergeClassNames } from '../../../core/helpers/config.helper';

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

  ngOnInit(): void {
    this.setClassNames();
  }

  public setClassNames(config: Partial<AvatarConfig> = AvatarConfig): void {
    this.class = mergeClassNames(toClassNames({ ...config, size: AvatarSizeOptions[this.size] }), this.class);
  }
}

export type AvatarConfig = Partial<ElementConfig>;

export const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}

export type AvatarSizeOptions = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const AvatarSizeOptions: AvatarSizeOptions = {
  xs: 'size-6',
  sm: 'size-9',
  md: 'size-11',
  lg: 'size-14',
  xl: 'size-16'
}
