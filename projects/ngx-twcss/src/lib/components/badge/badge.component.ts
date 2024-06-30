import { Component, Input, OnInit } from '@angular/core';
import { BaseConfig } from "../../configs/base.config";
import { BaseComponent } from '../base.component';
import { toClassName } from '../../core/helpers/config.helper';

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
  /* Set here so it cannot be override from the className.*/
  private readonly staticConfig: Partial<BaseConfig> = {
    fontSize: 'text-xs',
    borderWidth: 'ring-inset',
    padding: {
      x: 'px-1.5',
      y: 'py-1'
    },
    theme: {
      bgOpacity: 'bg-opacity-5',
      borderOpacity: 'ring-opacity-30',
      dark: {
        bgOpacity: 'dark:bg-opacity-5',
        borderOpacity: 'dark:ring-opacity-20'
      }
    }
  }

  @Input() override className!: string;

  ngOnInit(): void {
    this.className += ` ${toClassName(this.staticConfig)}`;
    this.initConfig(BadgeConfigKey, BadgeConfig);
  }
}
