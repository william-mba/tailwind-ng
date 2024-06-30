import { inject } from "@angular/core";
import { resolveClassName, toClassName } from "../core/helpers/config.helper";
import { ConfigService } from "../core/services/config.service";
import { SizeConfig } from "../configs/size.config";
import { Size } from "../core/types/size";

/**@package ngx-twcss */
export abstract class BaseComponent<ConfigType> {
  protected size!: Size;
  protected style: string = '';
  protected className: string = '';
  protected configService = inject(ConfigService<ConfigType>);

  protected initConfig(key: string, config: ConfigType): void {
    if (this.style.length > 3) return;

    this.configService.set(key, config)
      .get(key).subscribe((cfg) => {
        let style = toClassName([cfg]);

        if (this.size) {
          style += ` ${toClassName(SizeConfig[this.size])}`;
        }

        this.style = resolveClassName(style, this.className);
      });
  }
}
