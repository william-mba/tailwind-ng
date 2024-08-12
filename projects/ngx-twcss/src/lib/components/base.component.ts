import { inject } from "@angular/core";
import { mergeClassNames, toClassNames } from "../core/helpers/config.helper";
import { ConfigService } from "../core/services/config.service";

/** Ngx-twcss base component abstract class */
export abstract class BaseComponent {
  protected style: string = '';
  protected className: string = '';
  protected configService = inject(ConfigService);

  protected initConfig(key: string): void {
    if (this.style.length > 3) return;

    this.configService.get(key).subscribe((cfg) => {
      let style = toClassNames([cfg]);
      this.style = mergeClassNames(style, this.className);
    });
  }
}
