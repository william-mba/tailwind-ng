import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseConfig } from '../../configs/base.config';
import { resolveStyle, toClassName } from '../../core/helpers/config.helper';

/**Tooltip element ['size-3', 'p-0.5', 'text-[7px]', '-top-0', '-right-0.5', ..] */
@Directive({
  selector: 'tw-tooltip',
  standalone: true
})
export class Tooltip implements OnInit {
  @Input() className: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = toClassName(TooltipConfig);
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

export type TooltipConfig = Partial<BaseConfig>;

export const TooltipConfig: TooltipConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  size: 'size-3',
  width: 'min-w-min',
  padding: 'p-0.5',
  fontSize: 'text-[7px]',
  textWrap: 'text-nowrap',
  borderRadius: 'rounded-full',
  borderWidth: 'ring-2',
  theme: {
    bgColor: 'bg-blue-300',
    borderColor: 'ring-white',
    textColor: 'text-black'
  },
  position: {
    type: 'absolute',
    top: '-top-0',
    right: '-right-0.5'
  }
}
