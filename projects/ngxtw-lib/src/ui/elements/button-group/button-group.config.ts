import { Provider } from "@angular/core";
import { ConfigType, Modifier } from "../../../core/types/config.type";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { mergeConfig } from "../../../config/config.helper";

/** Button group config */
export interface ButtonGroupConfig extends ConfigType {
  child: Modifier<'*'>;
};
export const ButtonGroupConfig = (): ButtonGroupConfig => {
  return {
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
      fontSize: '*:text-sm',
      borderRadius: '*:rounded-none'
    },
    borderRadius: 'rounded-md'
  }
}

/**
 * Button group component config
 */
export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create(ButtonGroupConfig(), 'BUTTON_GROUP_CONFIG');

/**
 * Button group component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonGroupConfig(config: Partial<ButtonGroupConfig> = {}): Provider {
  return {
    provide: BUTTON_GROUP_CONFIG,
    useValue: mergeConfig({ target: ButtonGroupConfig(), source: [config] })
  }
}
