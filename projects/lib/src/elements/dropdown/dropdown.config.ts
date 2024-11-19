import { Provider } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { StyleConfig } from "../../core/types/style-config.type";
import { mergeConfig } from "../../core/utils/config.util";
import { InjectionTokenFactory } from "../../core/tokens/injection-token-factory";

/** Dropdown config */
export interface DropdownConfig extends Partial<StyleConfig> { };
const DropdownConfig: DropdownConfig = {
  display: 'grid',
  textAlign: 'text-start',
  padding: 'py-1',
  zIndex: 'z-10',
  width: 'min-w-52',
  overflow: 'overflow-hidden',
  transformOrigin: 'origin-top',
  position: 'absolute',
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  bgColor: 'bg-gray-50',
  borderColor: 'border-gray-200',
  dark: {
    bgColor: 'dark:bg-gray-900',
    borderColor: 'dark:border-gray-800'
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
export function provideDropdownConfig(config: Partial<DropdownConfig> = {}): Provider[] {
  return [
    provideAnimations(),
    {
      provide: DROPDOWN_CONFIG,
      useValue: mergeConfig({ target: DropdownConfig, source: [config] })
    }]
};

