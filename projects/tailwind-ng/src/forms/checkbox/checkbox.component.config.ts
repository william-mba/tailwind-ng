import { Provider } from '@angular/core';
import { CHECKBOX_CONFIG, ClassName } from '@tailwind-ng/core';

const DefaultConfig = () => {
	const className =
		'appearance-none border-1 border-black/20 checked:bg-blue-600 checked:border-blue-600 dark:border-white/20 disabled:bg-black/5 disabled:dark:bg-white/5 focus:outline-2 focus:outline-blue-600 focus:outline-offset-2 forced-colors:appearance-none indeterminate:bg-blue-600 indeterminate:border-blue-600 peer rounded-sm size-4';
	return className;
};

/**
 * Provides the Checkbox component config.
 */
export function provideCheckbox(className = ''): Provider {
	return {
		provide: CHECKBOX_CONFIG,
		useValue: className.length < 3 ? DefaultConfig() : ClassName.merge([DefaultConfig(), className]),
	};
}

export function withCheckbox(className = ''): Provider {
	return provideCheckbox(className);
}
