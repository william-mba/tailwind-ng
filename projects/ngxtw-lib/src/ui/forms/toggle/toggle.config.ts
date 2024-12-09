import { Provider } from "@angular/core";
import { Modifier, ConfigType } from "../../../core/types/config.type";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { mergeConfig } from "../../../config/config.helper";

/**
 * The configuration for the toggle container.
 */
export interface ToggleConfig extends ConfigType {
  ariaChecked?: Modifier<'aria-checked'>;
  hasChecked?: Modifier<'has-[:checked]'>;
  slider: Modifier<'*', ToggleConfig>;
};

export const ToggleConfig: ToggleConfig = {
  position: 'relative',
  cursor: 'cursor-pointer',
  userSelect: 'select-none',
  borderWidth: 'border-2',
  borderRadius: 'rounded-full',
  borderColor: 'border-transparent',
  width: 'w-11',
  height: 'h-6',
  bgColor: 'bg-gray-200',
  transition: {
    property: 'transition-colors',
    duration: 'duration-200',
  },
  dark: {
    bgColor: 'dark:bg-gray-800',
  },
  hasChecked: {
    bgColor: 'has-[:checked]:bg-blue-600',
  },
  slider: {
    position: '*:absolute',
    left: '*:left-0',
    inset: '*:inset-y-0',
    borderRadius: '*:rounded-full',
    height: '*:h-full',
    width: '*:w-1/2',
    userSelect: '*:select-none',
    pointerEvents: '*:pointer-events-none',
    boxShadow: '*:shadow',
    bgColor: '*:bg-white',
    alignItem: '*:items-center',
    justifyContent: '*:justify-center',
    display: '*:inline-flex'
  }
};

/**
 * Toggle component config
 */
export const TOGGLE_CONFIG = InjectionTokenFactory.create(ToggleConfig, 'TOGGLE_CONFIG');

/**
 * Toggle component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideToggleConfig(config: Partial<ToggleConfig> = {}): Provider {
  return {
    provide: TOGGLE_CONFIG,
    useValue: mergeConfig({ target: ToggleConfig, source: [config] })
  }
}
