import { Component, Input, OnInit } from '@angular/core';
import { BaseConfig } from "../../configs/base.config";
import { BaseComponent } from '../base.component';
import { BackgroundOpacity } from '../../core/types/backgrounds/background-opacity';
import { RingWidth } from '../../core/types/borders/ring-width';
import { RingOpacity } from '../../core/types/borders/ring-opacity';
import { FontSize } from '../../core/types/typography/font-size';

/**Badge config key*/
export const BadgeConfigKey = 'BadgeConfigKey';

/**Badge config*/
export type BadgeConfig = Partial<BaseConfig>;

export const BadgeConfig: BadgeConfig = {
  display: {
    gap: 'gap-1',
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
  },
  fontWeight: 'font-medium',
  borderRadius: 'rounded-md'
}
/**Badge component*/
@Component({
  standalone: true,
  selector: 'tw-badge',
  templateUrl: './badge.component.html'
})
export class Badge extends BaseComponent<BadgeConfig> implements OnInit {
  /* Used here instead of in the config to avoid
  the value to be override when coming from the className.*/
  private readonly fontSize: FontSize = 'text-xs';
  private readonly border: RingWidth = 'ring-inset';
  private readonly ringOpacity: RingOpacity = 'ring-opacity-30';
  private readonly bgOpacity: BackgroundOpacity = 'bg-opacity-5';
  private baseStyle: string = 'dark:bg-opacity-5 dark:ring-opacity-20';

  @Input() override className!: string;
  @Input() padding: string = 'px-1.5 py-1';

  ngOnInit(): void {
    this.baseStyle += ` ${this.padding} ${this.fontSize} ${this.border} ${this.ringOpacity} ${this.bgOpacity}`;
    this.className += ` ${this.baseStyle}`;
    this.initConfig(BadgeConfigKey, BadgeConfig);
  }
}
