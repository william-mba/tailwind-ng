import { Directive, inject, Input, OnInit } from "@angular/core";
import { ConfigTypeOf, IconName } from "../config";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "./injection-token.factory";
import { Icon } from "../interfaces/icon";

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}

export const ICON_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'Icon'>>({}, 'ICON_CONFIG');

@Directive({})
export abstract class IconBase extends BaseDirective implements OnInit {
  protected config = inject(ICON_CONFIG);
  @Input({ required: true }) name!: IconName;

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.config.map) {
      this.nativeElement.innerHTML = this.config.map[this.name];
    }
  }
}

