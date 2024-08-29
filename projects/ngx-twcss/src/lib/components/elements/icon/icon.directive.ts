import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames } from '../../../core/helpers/config.helper';
import { IconConfig, IconSizeOptions } from './icon.config';
import { IconSourceConfig } from './icon-source.config';

export interface IIcon {
  class: string;
  name: string;
  size: keyof IconSizeOptions;
  source: keyof IconSourceConfig;
  setClassNames(value: string): void;
}


@Directive({
  selector: 'tw-icon, [tw-icon]',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class Icon implements OnInit, IIcon {
  @Input() class!: string;
  @Input() name: string = 'star';
  @Input() size: keyof IconSizeOptions = 'md';
  @Input() source: keyof IconSourceConfig = 'default';
  private el = inject(ElementRef).nativeElement;

  ngOnInit(): void {
    this.el.innerHTML = IconConfig.source[this.source][this.name];
    this.setClassNames(this.class);
  }

  setClassNames(value: string): void {
    let classNames = 'inline-block ';

    /* Only add size class if the element is not an avatar
    *  because avatar has its own size classes
     */
    if (this.el.tagName !== 'TW-AVATAR') {
      classNames += IconConfig.size[this.size];
    }
    this.class = mergeClassNames(value, classNames);
  }
}
