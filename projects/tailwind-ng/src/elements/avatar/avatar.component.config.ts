import { Provider } from '@angular/core';
import { AVATAR_CONFIG, AvatarConfig, mergeConfig } from '@tailwind-ng/core';

const DefaultConfig = (): AvatarConfig => {
	const className = 'flex items-center justify-center relative rounded-full';
	return {
		className,
		xs: 'size-6',
		sm: 'size-9',
		md: 'size-11',
		lg: 'size-14',
		xl: 'size-16',
	};
};

/**
 * Avatar config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatar(customization?: Partial<AvatarConfig>): Provider {
	return {
		provide: AVATAR_CONFIG,
		useValue: !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]),
	};
}
