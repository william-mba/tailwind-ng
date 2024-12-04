import { Provider } from "@angular/core";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { SizeOption } from "../../../core/types/size-options.type";
import { StyleConfig } from "../../../core/types/style-config.type";
import { mergeConfig } from "../../../config/config.helper";

const AvatarSizeConfig: { [key in SizeOption]: string } = {
  xs: 'size-6',
  sm: 'size-9',
  md: 'size-11',
  lg: 'size-14',
  xl: 'size-16'
}

export const AVATAR_SIZE_CONFIG = InjectionTokenFactory.create(AvatarSizeConfig, 'AVATAR_SIZE_CONFIG');

export interface AvatarConfig extends Partial<StyleConfig> { };

const AvatarConfig: AvatarConfig = {
  display: 'flex',
  alignItem: 'items-center',
  justifyContent: 'justify-center',
  position: 'relative',
  borderRadius: 'rounded-full'
}

/**
 * @ngxtw Avatar config
 */
export const AVATAR_CONFIG = InjectionTokenFactory.create(AvatarConfig, 'AVATAR_CONFIG')
/**
 * Avatar config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatarConfig(config: Partial<AvatarConfig> = {}): Provider {
  return {
    provide: AVATAR_CONFIG,
    useValue: mergeConfig({ target: AvatarConfig, source: [config] })
  }
}
