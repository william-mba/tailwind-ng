import { inject } from "@angular/core";
import { resolveClassName, toClassName } from "../core/helpers/config.helper";
import { ConfigService } from "../core/services/config.service";

/** Ngx-twcss base component abstract class */
export abstract class BaseComponent<TConfig> {
  protected style: string = '';
  protected className: string = '';
  protected configService = inject(ConfigService<TConfig>);

  protected initConfig(key: string, config: TConfig): void {
    if (this.style.length > 3) return;

    this.configService.set(key, config)
      .get(key).subscribe((cfg) => {
        let style = toClassName([cfg]);
        this.style = resolveClassName(style, this.className);
      });
  }
}
