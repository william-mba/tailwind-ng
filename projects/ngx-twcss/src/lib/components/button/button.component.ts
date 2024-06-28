import { Component, Input, OnInit } from '@angular/core';
import { toClassName } from '../../core/helpers/config.helper';
import { BaseComponent, ComponentSize } from '../base.component';
import { ButtonConfig, ButtonConfigKey } from './button.config';
import { SizeConfig } from '../../configs/size.config';

/**Button component*/
@Component({
  selector: 'tw-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class Button extends BaseComponent<ButtonConfig> implements OnInit {
  @Input() override className!: string;
  @Input() override style!: string;
  @Input() override size: ComponentSize = 'md';
  @Input() variant: ButtonVariant = 'primary';

  ngOnInit(): void {
    if (!this.style) {
      this.initConfig();
    }
  }

  override initConfig(): void {
    this.configService.set(ButtonConfigKey, ButtonConfig)
      .get(ButtonConfigKey).subscribe((cfg) => {
        let style: string = '';

        if (this.variant === 'primary') {
          style = toClassName(cfg.primary);
        }

        if (this.variant === 'secondary') {
          style = toClassName(cfg.secondary);
        }

        if (this.variant === 'soft') {
          style = toClassName(cfg.soft);
        }

        if (this.size) {
          style += ` ${toClassName(SizeConfig[this.size])}`;
        }

        this.style = this.resolveStyle(style, this.className);
      });
  }
}

export type ButtonVariant = | 'primary' | 'secondary' | 'soft'
