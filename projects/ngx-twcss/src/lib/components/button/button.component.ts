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
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(ButtonConfigKey, ButtonConfig)
      .get(ButtonConfigKey).subscribe((cfg) => {
        if (this.variant === 'primary') {
          this.style = this.resolveStyle(toClassName(cfg.primary), this.className);
        }

        if (this.variant === 'secondary') {
          this.style = this.resolveStyle(toClassName(cfg.secondary), this.className);
        }

        if (this.variant === 'soft') {
          this.style = this.resolveStyle(toClassName(cfg.soft), this.className);
        }

        if (this.size) {
          this.style += ` ${toClassName(SizeConfig[this.size])}`;
        }
      });
  }
}

export type ButtonVariant = | 'primary' | 'secondary' | 'soft'
