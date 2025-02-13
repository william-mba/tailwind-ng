import { Provider } from "@angular/core";
import { mergeConfig, BADGE_CONFIG, BadgeConfig } from "@tailwind-ng/core";

const DefaultConfig = (): BadgeConfig => {
  return {
    base: {
      display: 'inline-flex',
      gap: 'gap-1',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      paddingX: 'px-1.5',
      paddingY: 'py-0.5',
      fontSize: 'text-xs',
      fontWeight: 'font-medium'
    },
    xs: {
      padding: 'p-0.5'
    },
    sm: {
      padding: 'p-1'
    },
    md: {
      padding: 'p-1.5'
    },
    lg: {
      padding: 'p-2'
    },
    xl: {
      padding: 'p-2.5'
    },
  }
}

export const GetBadgeConfig = (customization?: Partial<BadgeConfig>): BadgeConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideBadge(customization?: Partial<BadgeConfig>): Provider {
  return {
    provide: BADGE_CONFIG,
    useValue: GetBadgeConfig(customization)
  }
}
