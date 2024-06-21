import { inject } from "@angular/core";
import { toClassName } from "../core/helpers/object.helper";
import { ConfigService } from "../configs/config.service";
import { SizeConfig } from "../configs/size.config";

/**@package ngx-twcss */
export abstract class BaseComponent<ConfigType> {
  protected configService = inject(ConfigService<ConfigType>);
  protected size!: SizeVariant;
  protected style: string = '';
  protected className: string = '';
  protected config!: ConfigType;

  protected initConfig(key: string, config?: ConfigType): void {
    this.configService.set(key, config ?? this.config)
      .get(key).subscribe((cfg) => {
        this.style = this.addOrReplace(toClassName([cfg, SizeConfig[this.size]]), this.className);
      });
  }

  /**Add new Tailwind CSS utility classes or replace existing ones into style by a matching one in className
   * @param style - The default style to update
   * @param className - The classes to add or replace
   * @returns The updated style
  */
  protected addOrReplace(style: string, className: string): string {
    if (className.length >= 3) {
      let newClassList = style.split(' ');
      const incomingClassList = className.split(' ');
      const existingClassList = style.split(' ').join(' ');

      incomingClassList.forEach((name) => {

        const searchTerm = name.substring(0, name.indexOf('-'));

        if (existingClassList.includes(searchTerm)) {
          const existingClass = newClassList.find(c => c.includes(searchTerm));

          newClassList = newClassList.filter(c => c !== existingClass);
        }
      });
      newClassList.push(className);
      style = newClassList.join(' ');
    }
    return style;
  }

  protected removeClass(...classList: string[]): void {
    let filteredStyle = this.style.split(' ');
    classList.forEach(classToRemove => {
      filteredStyle = filteredStyle.filter((c) => c !== classToRemove);
    })
    this.style = filteredStyle.join(' ');
  }
}

export type SizeVariant = 'sm' | 'md' | 'lg';
