import { Directive } from '@angular/core';
import { BaseDirective } from '../directives';
import { InjectionTokenFactory } from '../tokens/injection-token.factory';
import { SizeOption } from '../types/size-options.type';
import { BaseActions, BaseProps } from '../directives';

/**
 * @TailwindNG Badge component interface.
 */
export interface Badge extends BaseProps, BaseActions {
	size: SizeOption;
}

export interface BadgeConfig extends Partial<Record<SizeOption, string>> {
	className?: string;
}

/**
 * Checks if the component is a Badge.
 * If so, you can safely access the Badge members inside this block scope.
 */
export function isBadge(component: unknown): component is Badge {
	return component instanceof BadgeBase;
}
export const BADGE_CONFIG = InjectionTokenFactory.create<Partial<BadgeConfig>>(
	{},
	'BADGE_CONFIG',
);

@Directive()
export abstract class BadgeBase extends BaseDirective {}
