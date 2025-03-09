import { Directive, inject, Input } from "@angular/core";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { classlist } from "../utils";
import { SizeOption } from "../types/size-options.type";
import { BaseActions, BaseProps } from "../directives";

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseProps, BaseActions {
  size: SizeOption;
}

/**
 * Checks if the component is an Avatar.
 * If so, you can safely access the Avatar members inside this block scope.
 */
export function isAvatar(component: unknown): component is Avatar {
  return component instanceof AvatarBase
}

export const AVATAR_SIZE = InjectionTokenFactory.create<Record<string, string>>(
  {
    xs: 'size-6',
    sm: 'size-9',
    md: 'size-11',
    lg: 'size-14',
    xl: 'size-16'
  },
  'AVATAR_SIZE'
);
export const AVATAR_CONFIG = InjectionTokenFactory.create<string>('', 'AVATAR_CONFIG');

@Directive()
export abstract class AvatarBase extends BaseDirective implements Avatar {
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    const className = `${inject(AVATAR_SIZE)[this.size]} ${inject(AVATAR_CONFIG)}`
    this.nativeElement.classList.add(...classlist(this.class).set(className).value);
  }
}
