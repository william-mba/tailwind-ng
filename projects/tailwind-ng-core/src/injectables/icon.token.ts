import { afterNextRender, Directive, inject, Input } from "@angular/core";
import { IconConfig, IconName } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Icon } from "../interfaces/icon";
import { FullyOptional } from "../types";

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}

export const ICON_CONFIG = InjectionTokenFactory.create<FullyOptional<IconConfig>>({}, 'ICON_CONFIG');

@Directive()
export abstract class IconBase extends BaseDirective {
  protected config = inject(ICON_CONFIG);
  @Input({ required: true }) name!: IconName;


  constructor() {
    super();
    afterNextRender({
      write: () => {
        if (this.config.map) {
          this.nativeElement.innerHTML = this.config.map[this.name] || '';
        }
      }
    });
  }
}

