import { inject } from "@angular/core";
import { IsAcceptableClass } from "../common/helpers/type.helper";
import { toClassName } from "../common/helpers/object.helper";
import { SizeConfig } from "../common/configs/size.config";
import { ConfigService } from "../common/configs/configs.service";


/**@package ngx-twcss */
export abstract class BaseComponent<ConfigType> {
  protected configService = inject(ConfigService<ConfigType>);
  protected size!: SizeVariant;
  protected style: string[] = [];
  protected className: string = '';

  initConfig(key: string, config: ConfigType): void {
    this.configService.set(key, config)
      .get(key).subscribe((cfg) => {
        this.style = [];
        this.addClass(toClassName([cfg, SizeConfig[this.size]]));
      });
  }

  hasClassName(className: string): boolean {
    return (this.className.search(className) === 0);
  }

  addClass(...args: string[]): void {
    args.forEach(c => {
      if (!IsAcceptableClass(c)) return

      if (!this.hasClassName(`/${c}/`)) {
        this.style.push(c)
      }
    })
    this.addClassName();
  }

  private addClassName() {
    if (this.className.length > 2) {
      const styleToString = this.style.join(' ');
      let styleArray = styleToString.split(' ');
      const classNames = this.className.split(' ');

      classNames.forEach((name) => {

        const searchTerm = name.substring(0, name.indexOf('-'));

        if (styleToString.includes(searchTerm)) {
          const existingClass = styleArray.find(c => c.includes(searchTerm));

          styleArray = styleArray.filter(c => c !== existingClass);
        }
      });
      styleArray.push(this.className);
      this.style = [styleArray.join(' ')];
    }
  }

  removeClass(...args: string[]): void {
    args.forEach(classToRemove => {
      this.style = this.style
        .filter((c) => c !== classToRemove)
    })
  }
}

export type SizeVariant = 'sm' | 'md' | 'lg';
