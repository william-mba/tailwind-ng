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

export const IconConfig = (): IconConfig => {
  return {
    source: {},
    size: {
      xs: '*:size-3',
      sm: '*:size-4',
      md: '*:size-5',
      lg: '*:size-6',
      xl: '*:size-7'
    },
  }
}

export const ICON_CONFIG = InjectionTokenFactory.create(IconConfig(), 'ICON_CONFIG');

export function provideIconConfig(config: Partial<IconConfig> = {}): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: mergeConfig({ target: IconConfig(), source: [config] })
  }
}
