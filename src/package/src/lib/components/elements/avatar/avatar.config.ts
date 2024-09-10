import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";

export type AvatarSizeOptions = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const AvatarSizeOptions: AvatarSizeOptions = {
  xs: 'size-6',
  sm: 'size-9',
  md: 'size-11',
  lg: 'size-14',
  xl: 'size-16'
}

export type AvatarConfig = Partial<ElementConfig>

const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}

/**
 * Avatar component config
 */
export const AVATAR_CONFIG = new InjectionToken<AvatarConfig>('Avatar component config');

/**
 * Avatar component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatarConfig(config?: Partial<AvatarConfig>): Provider {
  return {
    provide: AVATAR_CONFIG,
    useValue: mergeConfigs(AvatarConfig, config)
  }
}
