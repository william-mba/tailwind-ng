import { Provider } from '@angular/core';
import { ElementsConfig, provideElements } from './elements';
import { FormsConfig, provideForms } from './forms';
import { OverlaysConfig, provideOverlays } from './overlays';

/**
 * @TailwindNG UI configuration interface.
 */
export interface UIConfig {
	elements: Partial<ElementsConfig>;
	forms: Partial<FormsConfig>;
	overlays: Partial<OverlaysConfig>;
}

/**
 * Provides the Tailwind NG UI config with the given customization if any.
 */
export function provideUI(customization?: Partial<UIConfig>): Provider[] {
	return [
		provideElements(customization?.elements),
		provideForms(customization?.forms),
		provideOverlays(customization?.overlays),
	];
}
