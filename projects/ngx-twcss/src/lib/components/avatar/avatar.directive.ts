import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseConfig } from '../../configs/base.config';
import { toClassName, resolveClassName } from '../../core/helpers/config.helper';

/**Avatar element*/
@Directive({
  selector: 'tw-avatar',
  standalone: true
})
export class Avatar implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = toClassName(AvatarConfig);
    const style = resolveClassName(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

export type AvatarConfig = Partial<BaseConfig>;

export const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}
