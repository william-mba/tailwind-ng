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
  child: Modifier<'*', ToggleConfig>;
};

export const ToggleConfig: ToggleConfig = {
  position: 'relative',
  cursor: 'cursor-pointer',
  userSelect: 'select-none',
  borderWidth: 'border-2',
  borderRadius: 'rounded-full',
  borderColor: 'border-transparent',
  width: 'w-12',
  height: 'h-6',
  bgColor: 'bg-gray-200',
  overflow: 'overflow-hidden',
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
  child: {
    position: '*:absolute',
    inset: '*:inset-y-0',
    height: '*:h-full',
    width: '*:w-1/2',
    padding: '*:p-1',
    userSelect: '*:select-none',
    pointerEvents: '*:pointer-events-none',
    alignItem: '*:items-center',
    justifyContent: '*:justify-center',
    display: '*:inline-flex',
    overflow: '*:overflow-hidden',
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
