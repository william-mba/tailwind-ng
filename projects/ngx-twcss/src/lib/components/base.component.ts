import { inject } from "@angular/core";
import { IsAcceptableClass } from "../core/helpers/type.helper";
import { toClassName } from "../core/helpers/object.helper";
import { ConfigService } from "../configs/config.service";
import { SizeConfig } from "../configs/size.config";


/**@package ngx-twcss */
export abstract class BaseComponent<ConfigType> {
  protected configService = inject(ConfigService<ConfigType>);
  protected size!: SizeVariant;
  protected style: string[] = [];
  protected className: string = '';
  protected config!: ConfigType;

  protected initConfig(key: string, config?: ConfigType): void {
    this.configService.set(key, config ?? this.config)
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
