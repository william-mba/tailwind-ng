import { Component, Input, OnInit } from '@angular/core';
import { PrimaryButtonConfigKey } from './button.config';
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
  @Input() type: ButtonType = 'primary';

  ngOnInit(): void {
    if (!this.style) {
      this.initConfig();
      return;
    }
    this.style = this.resolveStyle(this.style, this.className);
  }

  override initConfig(): void {
    if (this.type === 'primary') {
      this.configService.set(PrimaryButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.primary, SizeConfig[this.size]]), this.className);
        });
    }
    if (this.type === 'secondary') {
      this.configService.set(SecondaryButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.secondary, SizeConfig[this.size]]), this.className);
        });
    }
    if (this.type === 'soft') {
      this.configService.set(SoftButtonConfigKey, ButtonConfig)
        .get(PrimaryButtonConfigKey).subscribe((cfg) => {
          this.style = this.resolveStyle(toClassName([cfg.soft, SizeConfig[this.size]]), this.className);
        });
    }
  }

}

export type ButtonType = | 'primary' | 'secondary' | 'soft'
