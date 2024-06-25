import { Component, Input, OnInit } from '@angular/core';
import { PrimaryButtonConfigKey } from './primary-button.config';
import { toClassName } from '../../core/helpers/config.helper';
import { BaseComponent, SizeVariant } from '../base.component';
import { ButtonConfig } from './button.config';
import { SizeConfig } from '../../configs/size.config';
import { SecondaryButtonConfigKey } from './secondary-button.config';
import { SoftButtonConfigKey } from './soft-button.config';

@Component({
  selector: 'tw-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class Button extends BaseComponent<ButtonConfig> implements OnInit {
  protected contentStyle!: string;

  @Input() override style!: string;
  @Input() override className!: string;
  @Input() override size: SizeVariant = 'md';
  @Input() variant: ButtonVariant = 'primary';

  ngOnInit(): void {
    if (!this.style) {
      this.initConfig();
      return;
    }
    this.style = this.resolveStyle(this.style, this.className);
  }

  override initConfig(): void {
    if (this.variant === 'primary') {
      this.configService.set(PrimaryButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.primary, SizeConfig[this.size]]), this.className);
        });
    }
    if (this.variant === 'secondary') {
      this.configService.set(SecondaryButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.secondary, SizeConfig[this.size]]), this.className);
        });
    }
    if (this.variant === 'soft') {
      this.configService.set(SoftButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.soft, SizeConfig[this.size]]), this.className);
        });
    }
  }

}

export type ButtonVariant = | 'primary' | 'secondary' | 'soft'
