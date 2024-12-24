import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { SizeOption } from "../../../core/types/size-options.type";
import { ConfigType } from "../../../core/types/config.type";
import { mergeConfig } from "../../../config/config.helper";
import { FullyOptional } from "../../../core/types/fully-optional.type";

export type AvatarConfig = {
  theme: ConfigType,
  size: { [key in SizeOption]: string }
};

const DefaultConfig = (): AvatarConfig => {
  return {
    theme: {
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      position: 'relative',
      borderRadius: 'rounded-full',
    },
    size: {
      xs: 'size-6',
      sm: 'size-9',
      md: 'size-11',
      lg: 'size-14',
      xl: 'size-16'
    }
  }
}

export const AvatarConfig = (customization?: FullyOptional<AvatarConfig>): AvatarConfig => {
  return !customization ? DefaultConfig() : mergeConfig({ target: DefaultConfig(), source: [customization] });
}

/**
 * @ngxtw Avatar config
 */
export const AVATAR_CONFIG = InjectionTokenFactory.create(AvatarConfig(), 'AVATAR_CONFIG')
/**
 * Avatar config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatarConfig(customization?: FullyOptional<AvatarConfig>): Provider {
  return {
    provide: AVATAR_CONFIG,
    useValue: AvatarConfig(customization)
  }
}
