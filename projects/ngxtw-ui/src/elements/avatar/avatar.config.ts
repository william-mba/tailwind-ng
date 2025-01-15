import { Provider } from "@angular/core";
import { mergeConfig, SizeOption, AVATAR_CONFIG, ComponentConfig, SizingLayout } from "@ngxtw/core";

/**
 * @ngxtw Avatar config
 */
export interface AvatarConfig extends Record<SizeOption, Pick<SizingLayout, 'size'>> {
  base: ComponentConfig
};

const DefaultConfig = (): AvatarConfig => {
  return {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      position: 'relative',
      radius: 'rounded-full',
    },
    xs: {
      size: 'size-6'
    },
    sm: {
      size: 'size-9'
    },
    md: {
      size: 'size-11'
    },
    lg: {
      size: 'size-14'
    },
    xl: {
      size: 'size-16'
    }
  }
}

export const AvatarConfig = (customization?: Partial<AvatarConfig>): AvatarConfig => {
  return !customization ? DefaultConfig() : mergeConfig([DefaultConfig(), customization]);
}

/**
 * Avatar config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatarConfig(customization?: Partial<AvatarConfig>): Provider {
  return {
    provide: AVATAR_CONFIG,
    useValue: AvatarConfig(customization)
  }
}
