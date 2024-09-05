import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

/** Button group config */
export type ButtonGroupConfig = Partial<ElementConfig>;
const ButtonGroupConfig: ButtonGroupConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-stretch'
  },
  filters: {
    backdrop: 'backdrop-blur'
  }
}
/**
 * Button group component config
 */
export const BUTTON_GROUP_CONFIG = new InjectionToken<ButtonGroupConfig>('Button group component config');

/**
 * Button group component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonGroupConfig(config?: Partial<ButtonGroupConfig>): Provider {
  return {
    provide: BUTTON_GROUP_CONFIG,
    useValue: mergeConfigs(ButtonGroupConfig, config)
  }
}
