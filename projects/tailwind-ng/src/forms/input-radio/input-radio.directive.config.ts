import { Provider } from '@angular/core';
import { INPUT_RADIO_CONFIG, ClassName } from '@tailwind-ng/core';

const DefaultConfig = () => {
	const className =
		'appearance-none border-1 border-gray-300 dark:border-gray-700/70 checked:before:absolute checked:before:bg-white checked:before:inset-1 checked:before:rounded-full checked:bg-blue-600 checked:border-blue-600 disabled:bg-black/5 disabled:dark:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-600 outline-offset-2 forced-colors:appearance-auto forced-colors:before:hidden relative rounded-full size-4';
	return className;
};

/**
 * Provides the input radio config.
 */
export function provideInputRadio(className = ''): Provider {
	return {
		provide: INPUT_RADIO_CONFIG,
		useValue:
			className.length < 3
				? DefaultConfig()
				: ClassName.resolve([DefaultConfig(), className]),
	};
}
