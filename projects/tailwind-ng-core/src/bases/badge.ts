import { Directive, inject, Input } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { classlist } from "../utils";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseProps } from "../directives";

/**
 * @TailwindNG Badge component interface.
 */
export interface Badge extends BaseProps, BaseActions {
  size: SizeOption;
}

/**
 * Checks if the component is a Badge.
 * If so, you can safely access the Badge members inside this block scope.
 */
export function isBadge(component: unknown): component is Badge {
  return component instanceof BadgeBase
}

export const BADGE_SIZE = InjectionTokenFactory.create<Record<string, string>>(
  {
    xs: 'px-1.5 py-0.5',
    sm: 'px-1.5 py-1',
    md: 'px-2 py-1.5',
    lg: 'px-2.5 py-2',
    xl: 'px-3 py-2.5'
  },
  'BADGE_SIZE'
);

export const BADGE_CONFIG = InjectionTokenFactory.create<string>('', 'BADGE_CONFIG');

@Directive()
export abstract class BadgeBase extends BaseDirective implements Badge {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    const className = `${inject(BADGE_SIZE)[this.size]} ${inject(BADGE_CONFIG)}`
    this.nativeElement.classList.add(...classlist(this.class).set(className).value);
  }
}
