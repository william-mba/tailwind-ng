import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { SizeOption } from "../../../core/types/size-options.type";
import { ConfigType } from "../../../core/types/config.type";
import { mergeConfig } from "../../../config/config.helper";

/** @ngxtw Badge config*/
export type BadgeConfig = {
  theme: ConfigType;
  size: { [key in SizeOption]: string };
};
export const BadgeConfig = (): BadgeConfig => {
  return {
    theme: {
      display: 'inline-flex',
      gap: 'gap-1',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      padding: {
        x: 'px-1.5',
        y: 'py-0.5'
      },
      fontSize: 'text-xs',
      fontWeight: 'font-medium'
    },
    size: {
      xs: 'p-0.5',
      sm: 'p-1',
      md: 'p-1.5',
      lg: 'p-2',
      xl: 'p-2.5',
    }
  }
}

/**
 * Badge component config
 */
export const BADGE_CONFIG = InjectionTokenFactory.create(BadgeConfig(), 'BADGE_CONFIG');

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideBadgeConfig(config: Partial<BadgeConfig> = {}): Provider {
  return {
    provide: BADGE_CONFIG,
    useValue: mergeConfig({ target: BadgeConfig(), source: [config] })
  }
}
