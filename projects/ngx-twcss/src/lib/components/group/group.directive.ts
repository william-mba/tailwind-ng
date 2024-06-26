import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { toClassName, resolveStyle } from '../../core/helpers/config.helper';
import { BaseConfig } from '../../configs/base.config';

/**Group element*/
@Directive({
  selector: 'tw-group',
  standalone: true
})
export class Group implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = toClassName(GroupConfig);
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

export type GroupConfig = Partial<BaseConfig>;

export const GroupConfig: GroupConfig = {
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  }
}
