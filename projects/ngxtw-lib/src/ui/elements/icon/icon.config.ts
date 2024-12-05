import { Provider } from "@angular/core";
import { SizeOption } from "../../../core/types/size-options.type";
import { mergeConfig } from "../../../config/config.helper";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";

/**
 * Icon config
 */
export type IconConfig = {
  source: { [p1: string]: string }
  size: Partial<{ [key in SizeOption]: string }>,
}

const IconConfig: IconConfig = {
  source: {},
  size: {
    xs: '*:size-4',
    sm: '*:size-5',
    md: '*:size-6',
    lg: '*:size-7',
    xl: '*:size-8'
  },
}

export const ICON_CONFIG = InjectionTokenFactory.create(IconConfig, 'ICON_CONFIG');

export function provideIconConfig(config: Partial<IconConfig> = {}): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: mergeConfig({ target: IconConfig, source: [config] })
  }
}
