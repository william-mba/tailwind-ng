import { Provider } from "@angular/core";
import { ModifiedStyle, StyleConfig } from "../../../core/types/style-config.type";
import { InjectionTokenFactory } from "../../../core/shared/injection-token.factory";
import { mergeConfig } from "../../../config/config.helper";

/** Dropdown config */
export interface DropdownConfig extends Partial<StyleConfig> {
  opened: Partial<ModifiedStyle<'open'>>
};
const DropdownConfig: DropdownConfig = {
  display: 'grid',
  textAlign: 'text-start',
  fontSize: 'text-sm',
  padding: 'py-1',
  zIndex: 'z-10',
  width: 'min-w-52',
  overflow: 'overflow-hidden',
  transformOrigin: 'origin-top',
  position: 'absolute',
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  bgColor: 'bg-gray-50',
  boxShadow: 'shadow-lg',
  borderColor: 'border-gray-200',
  dark: {
    bgColor: 'dark:bg-gray-800',
    textColor: 'dark:text-gray-100',
    borderColor: 'dark:border-gray-800'
  },
  opened: {
    cursor: 'open:cursor-pointer',
  }
};

/**
 * Dropdown config token
 */
export const DROPDOWN_CONFIG = InjectionTokenFactory.create(DropdownConfig, 'DROPDOWN_CONFIG');
/**
 *  Dropdown config provider
 * @param config The custom config
 * @returns The config provider
 */
export function provideDropdownConfig(config: Partial<DropdownConfig> = {}): Provider {
  return {
    provide: DROPDOWN_CONFIG,
    useValue: mergeConfig({ target: DropdownConfig, source: [config] })
  }
};

