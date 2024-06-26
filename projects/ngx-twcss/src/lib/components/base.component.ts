import { inject } from "@angular/core";
import { resolveStyle, toClassName } from "../core/helpers/config.helper";
import { ConfigService } from "../configs/config.service";
import { SizeConfig } from "../configs/size.config";

/**@package ngx-twcss */
export abstract class BaseComponent<ConfigType> {
  protected configService = inject(ConfigService<ConfigType>);
  protected size!: ComponentSize;
  protected style: string = '';
  protected className: string = '';
  protected config!: ConfigType;

  protected initConfig(key: string, config?: ConfigType): void {
    this.configService.set(key, config ?? this.config)
      .get(key).subscribe((cfg) => {
        this.style = this.resolveStyle(toClassName([cfg, SizeConfig[this.size]]), this.className);
      });
  }

  protected resolveStyle(style: string, className: string): string {
    return resolveStyle(style, className);
  }

  protected removeClass(...classList: string[]): void {
    let filteredStyle = this.style.split(' ');
    classList.forEach(classToRemove => {
      filteredStyle = filteredStyle.filter((c) => c !== classToRemove);
    })
    this.style = filteredStyle.join(' ');
  }
}

export type ComponentSize = 'sm' | 'md' | 'lg';
