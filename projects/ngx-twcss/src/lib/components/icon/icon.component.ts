import { Component, ElementRef, inject, Input } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { IconConfig, IconSizeOptions } from './icon.config';
import { IconSourceConfig } from './icon-source.config';

@Component({
  selector: 'tw-icon, [tw-icon]',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: ''
})
export class Icon {
  @Input() class!: string;
  @Input() config!: string;
  @Input() name: string = 'star';
  @Input() size: keyof IconSizeOptions = 'md';
  @Input() source: keyof IconSourceConfig = 'default';
  private el = inject(ElementRef).nativeElement;

  ngOnInit(): void {
    this.el.innerHTML = IconConfig.source[this.source][this.name];
    this.setConfig(this.class);
  }

  setConfig(value: string): void {
    this.config = mergeClassNames(value, toClassNames(IconConfig.size[this.size]!)) + ' inline-block';
  }
}
