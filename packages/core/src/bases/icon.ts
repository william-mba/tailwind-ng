import { Directive, Input } from '@angular/core';
import { BaseDirective } from '../directives';
import { InjectionTokenFactory } from '../tokens/injection-token.factory';
import { SizeOption } from '../types/size-options.type';

/**
 * @TailwindNG Icon component interface.
 */
export interface Icon {
	name: IconName;
	size: SizeOption;
}

export interface IconConfig extends Partial<Record<SizeOption, string>> {
	className?: string;
	map?: IconMap;
}

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
	return component instanceof IconBase;
}
export const ICON_CONFIG = InjectionTokenFactory.create<Partial<IconConfig>>(
	{},
	'ICON_CONFIG',
);

@Directive()
export abstract class IconBase extends BaseDirective implements Icon {
	@Input({ required: true }) name!: IconName;
	@Input() size: SizeOption = 'md';
}

export type IconMap = Partial<Record<IconName, string>>;
export type IconName =
	| (string & {})
	| 'minus'
	| 'check'
	| 'tailwind-ng'
	| 'cmd-k'
	| 'dot'
	| 'npm'
	| 'github'
	| 'burger-menu'
	| 'strash'
	| 'star'
	| 'share'
	| 'arrow-right-circle'
	| 'archive-box'
	| 'document-duplicate'
	| 'chevron-down'
	| 'pencil-square'
	| 'user'
	| 'swatch'
	| 'language'
	| 'check-circle'
	| 'plus-circle'
	| 'cloud-arrow-down'
	| 'megaphone'
	| 'arrow-left-end-on'
	| 'video-camera'
	| 'arrow-up'
	| 'bars-3'
	| 'chevron-right'
	| 'chevron-left'
	| 'content-copy'
	| 'close'
	| 'check-2'
	| 'add'
	| 'more-ver'
	| 'more-horiz'
	| 'arrow-drop-down'
	| 'format-color-reset'
	| 'moon'
	| 'sun'
	| 'sparkles'
	| 'check-badge'
	| 'beaker'
	| 'rocket'
	| 'bolt'
	| 'accessibility'
	| 'mix-vertical'
	| 'license';
