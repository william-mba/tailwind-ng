import { Provider } from '@angular/core';
import {
	BADGE_CONFIG,
	BadgeConfig,
	mergeConfig,
} from '../../../../core/src/public-api';

const DefaultConfig = (): BadgeConfig => {
	const className =
		'inline-flex gap-1 items-center justify-center text-xs font-medium';
	return {
		className,
		xs: 'px-1.5 py-0.5',
		sm: 'px-1.5 py-1',
		md: 'px-2 py-1.5',
		lg: 'px-2.5 py-2',
		xl: 'px-3 py-2.5',
	};
};

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideBadge(customization?: Partial<BadgeConfig>): Provider {
	return {
		provide: BADGE_CONFIG,
		useValue: !customization
			? DefaultConfig()
			: mergeConfig([DefaultConfig(), customization]),
	};
}

export function withBadge(customization?: Partial<BadgeConfig>): Provider {
	return provideBadge(customization);
}
