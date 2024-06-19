import { Component, Input, OnInit } from '@angular/core';
import { BaseConfig } from "../../configs/base.config";
import { BaseComponent } from '../base.component';

/**Badge element config key
 * @package ngx-twcss
*/
export const BadgeConfigKey = 'BadgeConfigKey';

/**Badge element config
 * @package ngx-twcss
*/
export type BadgeConfig = Partial<BaseConfig>;

export const BadgeConfig: BadgeConfig = {
  ...BaseConfig,
  fontWeight: 'font-medium'
}
/**Badge element
 * @package ngx-twcss
*/
@Component({
  standalone: true,
  selector: 'nxt-badge',
  templateUrl: './badge.component.html'
})
export class Badge extends BaseComponent<BadgeConfig> implements OnInit {
  @Input() override style!: string[];
  @Input() override className!: string;

  ngOnInit(): void {
    const staticStyle = 'ring-inset ring-1 px-2 py-1 ' +
      'text-xs bg-opacity-5 ring-opacity-30 ' +
      'dark:bg-opacity-10 dark:ring-opacity-10 ';
    this.className = staticStyle + this.className;
    this.initConfig(BadgeConfigKey, BadgeConfig);
  }
}
