import { Provider } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { StyleConfig } from "../../../../ngxtw-lib/src/lib/core/types/style-config.type";
import { mergeConfig } from "../../core/utils/config.util";
import { InjectionTokenFactory } from "../../core/tokens/injection-token-factory";
import { ValueObject } from "../../core/utils/object.util";

/**
 * The configuration for the toggle container.
 */
interface ToggleContainerConfig extends Partial<StyleConfig> { };
export const ToggleContainerConfig: ToggleContainerConfig = {
  position: 'relative',
  cursor: 'cursor-pointer',
  userSelect: 'select-none',
  borderWidth: 'border-2',
  width: 'w-11',
  height: 'h-6',
  borderRadius: 'rounded-full',
  bgColor: 'bg-gray-200',
  transitionProperty: 'transition-colors',
  transitionDuration: 'duration-200',
  borderColor: 'border-transparent',
  dark: {
    bgColor: 'dark:bg-gray-800',
  }
}

/**
 * The configuration for the slider.
 */
interface SliderConfig extends Partial<StyleConfig> { };
export const SliderConfig: SliderConfig = {
  position: {
    type: 'absolute',
    left: 'left-0',
    inset: 'inset-y-0',
  },
  height: 'h-full',
  width: 'w-1/2',
  borderRadius: 'rounded-full',
  userSelect: 'select-none',
  pointerEvents: 'pointer-events-none',
  boxShadow: 'shadow',
  bgColor: 'bg-white',
  alignItem: 'items-center',
  justifyContent: 'justify-center',
  display: 'inline-flex'
}

/**
 * The configuration for the toggle.
 */
export interface ToggleConfig extends ValueObject {
  container: ToggleContainerConfig;
  slider: SliderConfig;
}
const ToggleConfig: ToggleConfig = {
  container: ToggleContainerConfig,
  slider: SliderConfig,
}

/**
 * Toggle component config
 */
export const TOGGLE_CONFIG = InjectionTokenFactory.create(ToggleConfig, 'TOGGLE_CONFIG');

/**
 * Toggle component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideToggleConfig(config: Partial<ToggleConfig> = {}): Provider[] {
  return [
    provideAnimations(),
    {
      provide: TOGGLE_CONFIG,
      useValue: mergeConfig({ target: ToggleConfig, source: [config] })
    }
  ]
}
