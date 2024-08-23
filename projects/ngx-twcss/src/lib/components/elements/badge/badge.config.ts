import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

/**Badge config*/
export type BadgeConfig = Partial<ElementConfig>;
const BadgeConfig: BadgeConfig = {
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
    gap: 'gap-1',
  },
  padding: {
    x: 'px-2',
    y: 'py-1'
  },
  fontSize: 'text-xs',
  fontWeight: 'font-medium'
}

/**
 * Badge component config
 */
export const BADGE_CONFIG = new InjectionToken<BadgeConfig>('Badge component config');

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export const provideBadgeConfig = (config?: Partial<BadgeConfig>): Provider => {
  return {
    provide: BADGE_CONFIG,
    useValue: mergeConfigs(BadgeConfig, config)
  }
}
