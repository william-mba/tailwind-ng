import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseConfig } from '../../configs/base.config';
import { toClassName, resolveStyle } from '../../core/helpers/config.helper';

/**Avatar component. ['text-xl', 'rounded-full', 'relative', 'text-nowrap', ..]
  @package ngx-twcss
 */
@Directive({
  selector: 'tw-avatar',
  standalone: true
})
export class Avatar implements OnInit {
  @Input() className: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = toClassName(AvatarConfig);
    const style = resolveStyle(baseStyle, this.className);
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
  fontSize: 'text-xl',
  textWrap: 'text-nowrap',
  borderWidth: 'ring-2',
  borderRadius: 'rounded-full',
  theme: {
    bgColor: 'bg-gray-500',
    textColor: 'text-white',
    borderColor: 'ring-white'
  }
}
