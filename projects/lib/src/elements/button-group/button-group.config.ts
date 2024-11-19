import { Provider } from "@angular/core";
import { StyleConfig } from "../../core/types/style-config.type";
import { mergeConfig } from "../../core/utils/config.util";
import { InjectionTokenFactory } from "../../core/tokens/injection-token-factory";

/** Button group config */
export interface ButtonGroupConfig extends Partial<StyleConfig> { };
const ButtonGroupConfig: ButtonGroupConfig = {
  display: 'inline-flex',
  boxShadow: 'shadow-sm',
  isolation: 'isolate',
  overflow: 'overflow-hidden',
  divideWidth: 'divide-x',
  divideColor: 'divide-gray-300',
  ringWidth: 'ring-1',
  ringColor: 'ring-gray-300',
  dark: {
    ringColor: 'dark:ring-gray-700',
    divideColor: 'dark:divide-gray-700',
  },
  child: {
    ringWidth: '*:ring-0',
    borderRadius: '*:rounded-none',
  },
  borderRadius: 'rounded-md',
}

/**
 * Button group component config
 */
export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create(ButtonGroupConfig, 'BUTTON_GROUP_CONFIG');

/**
 * Button group component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonGroupConfig(config: Partial<ButtonGroupConfig> = {}): Provider {
  return {
    provide: BUTTON_GROUP_CONFIG,
    useValue: mergeConfig({ target: ButtonGroupConfig, source: [config] })
  }
}
