import { Provider } from "@angular/core";
import { mergeConfig, AvatarConfig, AVATAR_CONFIG } from "@tailwind-ng/core";

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

export const GetAvatarConfig = (customization?: Partial<AvatarConfig>): AvatarConfig => {
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
    useValue: GetAvatarConfig(customization)
  }
}
