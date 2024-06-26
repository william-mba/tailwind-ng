import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { toClassName, resolveStyle } from '../../../core/helpers/config.helper';
import { BaseConfig } from '../../../configs/base.config';

/**Modal icon element */
@Directive({
  selector: 'tw-modal-icon',
  standalone: true
})
export class ModalIcon implements OnInit {
  @Input() className: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = toClassName(ModalIconConfig);
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

export type ModalIconConfig = Partial<BaseConfig>;

export const ModalIconConfig: ModalIconConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  height: 'h-12',
  width: 'w-12',
  margin: 'mx-auto',
  borderRadius: 'rounded-full',
  theme: {
    bgColor: 'bg-red-100'
  },
  extends: {
    flexShrink: 'shrink-0',
    marginX: 'mx-auto',
    sm: {
      size: 'sm:size-10',
      marginX: 'sm:mx-0',
    }
  }
}
