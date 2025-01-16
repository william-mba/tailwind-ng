import { Provider } from "@angular/core";
import { BUTTON_GROUP_CONFIG, ComponentConfig, mergeConfig } from "@ngx-tailwind/core";

const DefaultConfig = (): ComponentConfig => {
  return {
    display: 'inline-flex',
    boxShadow: 'shadow-sm',
    isolation: 'isolate',
    overflow: 'overflow-hidden',
    divideWidth: 'divide-x',
    divideColor: 'divide-gray-300',
    ringWidth: 'ring-1',
    ringColor: 'ring-gray-300',
    width: 'w-fit',
    dark: {
      ringColor: 'dark:ring-gray-700',
      divideColor: 'dark:divide-gray-700',
    },
    child: {
      ringWidth: '*:ring-0',
      fontSize: '*:text-sm',
      radius: '*:rounded-none'
    },
    radius: 'rounded-md'
  }
}

/**
 * Returns the ButtonGroup configuration. If customization is provided, it will be merged with the default configuration.
 */
export const GetButtonGroupConfig = (customization?: Partial<ComponentConfig>): ComponentConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * Button group component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonGroupConfig(customization?: Partial<ComponentConfig>): Provider {
  return {
    provide: BUTTON_GROUP_CONFIG,
    useValue: GetButtonGroupConfig(customization)
  }
}
