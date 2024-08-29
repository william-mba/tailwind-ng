import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

/**
 * The configuration for the toggle container.
 */
export type ToggleContainerConfig = Partial<ElementConfig>;
export const ToggleContainerConfig: ToggleContainerConfig = {
  position: 'relative',
  cursor: 'cursor-pointer',
  userSelect: 'select-none',
  borderWidth: 'border-2',
  width: 'w-11',
  height: 'h-6',
  borderRadius: 'rounded-full',
  display: {
    type: 'inline-flex',
    flexShrink: 'shrink-0',
  },
  theme: {
    light: {
      bgColor: 'bg-black/10',
      borderColor: 'border-transparent',
    },
    dark: {
      bgColor: 'dark:bg-white/10',
    }
  }
}

/**
 * The configuration for the slider.
 */
export type SliderConfig = Partial<ElementConfig>;
export const SliderConfig: SliderConfig = {
  position: {
    type: 'absolute',
    left: 'left-0',
  },
  size: 'size-5',
  borderRadius: 'rounded-full',
  userSelect: 'select-none',
  pointerEvents: 'pointer-events-none',
  shadow: 'shadow',
  theme: {
    shadowColor: 'shadow-black/30',
    bgColor: 'bg-white',
  },
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
    alignSelf: 'self-center',
  }
}

/**
 * The configuration for the toggle.
 */
export type ToggleConfig = {
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
export const TOGGLE_CONFIG = new InjectionToken<ToggleConfig>("Toggle component config");

/**
 * Toggle component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export const provideToggleConfig = (config?: Partial<ToggleConfig>): Provider => {
  return {
    provide: TOGGLE_CONFIG,
    useValue: mergeConfigs(ToggleConfig, config)
  }
}
