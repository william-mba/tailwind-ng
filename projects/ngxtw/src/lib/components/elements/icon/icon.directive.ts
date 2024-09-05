import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames } from '../../../core/helpers/config.helper';
import { ICON_CONFIG, IconConfig, IconSizeOptions } from './icon.config';
import { IconSourceConfig } from './icon-source.config';
import { Icon } from './icon';

@Directive({
  selector: 'tw-icon, [tw-icon]',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class IconDirective implements OnInit, Icon {
  private readonly config: IconConfig = inject(ICON_CONFIG);
  private readonly element = inject(ElementRef).nativeElement;

  @Input()
  public class!: string;
  @Input()
  public name: string = 'star';
  @Input()
  public size: keyof IconSizeOptions = 'md';
  @Input()
  public source: keyof IconSourceConfig = 'default';

  ngOnInit(): void {
    this.element.innerHTML = this.config.source[this.source][this.name];
    this.setClassNames(this.class);
  }

  public setClassNames(value: string): void {
    let classNames = 'inline-block ';

    /* Only add size class if the element is not an avatar
    *  because avatar has its own size classes
     */
    if (this.element.tagName !== 'TW-AVATAR') {
      classNames += this.config.size[this.size];
    }
    this.class = mergeClassNames(value, classNames);
  }
}
