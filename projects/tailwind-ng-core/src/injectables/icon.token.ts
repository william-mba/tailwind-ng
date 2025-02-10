import { Directive, inject, Input, OnInit } from "@angular/core";
import { ConfigOf, IconConfig, IconName } from "../config";
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

export const ICON_CONFIG = InjectionTokenFactory.create<Partial<IconConfig>>({}, 'ICON_CONFIG');

@Directive({})
export abstract class IconBase extends BaseDirective implements ConfigOf<'Icon'>, OnInit {
  @Input() config = inject(ICON_CONFIG);
  @Input({ required: true }) name!: IconName;

  override async ngOnInit(): Promise<void> {
    if (this.config.map) {
      this.nativeElement.innerHTML = this.config.map[this.name];
    }
    super.ngOnInit();
  }
}

