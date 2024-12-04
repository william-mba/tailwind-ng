import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { SizeOption } from "../../../core/types/size-options.type";
import { StyleConfig } from "../../../core/types/style-config.type";
import { mergeConfig } from "../../../config/config.helper";

const BadgeSizeConfig: { [key in SizeOption]: string } = {
  xs: 'p-0.5',
  sm: 'p-1',
  md: 'p-1.5',
  lg: 'p-2',
  xl: 'p-2.5',
}

export const BADGE_SIZE_CONFIG = InjectionTokenFactory.create(BadgeSizeConfig, 'BADGE_SIZE_CONFIG');

/** @ngxtw Badge config*/
export interface BadgeConfig extends Partial<StyleConfig> { };
const BadgeConfig: BadgeConfig = {
  display: 'inline-flex',
  gap: 'gap-1',
  alignItem: 'items-center',
  justifyContent: 'justify-center',
  padding: {
    x: 'px-1.5',
    y: 'py-0.5'
  },
  fontSize: 'text-xs',
  fontWeight: 'font-medium'
}

/**
 * Badge component config
 */
export const BADGE_CONFIG = InjectionTokenFactory.create(BadgeConfig, 'BADGE_CONFIG');

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideBadgeConfig(config: Partial<BadgeConfig> = {}): Provider {
  return {
    provide: BADGE_CONFIG,
    useValue: mergeConfig({ target: BadgeConfig, source: [config] })
  }
}
