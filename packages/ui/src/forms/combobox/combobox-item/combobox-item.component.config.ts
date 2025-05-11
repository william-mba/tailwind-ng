import { Provider } from '@angular/core';
import { COMBOBOX_ITEM_CONFIG, ClassName } from '@tailwind-ng/core';

const DefaultConfig = () => {
	const className =
		'cursor-pointer data-selected:bg-blue-600 data-selected:font-bold data-selected:text-white data-visual-focused:bg-blue-700 data-visual-focused:font-bold data-visual-focused:outline-0 data-visual-focused:text-white flex focus:bg-blue-700 focus:font-bold focus:outline-0 focus:text-white gap-1 h-fit hover:bg-blue-600 hover:font-bold hover:text-white items-center px-4 py-2 relative';
	return className;
};

/**
 * @TailwindNG Combobox Item config provider.
 */
export function provideComboboxItem(className = ''): Provider {
	return {
		provide: COMBOBOX_ITEM_CONFIG,
		useValue:
			className.length < 3
				? DefaultConfig()
				: ClassName.merge(DefaultConfig(), className),
	};
}
export function withComboboxItem(className = ''): Provider {
	return provideComboboxItem(className);
}
