import { InjectionToken, Provider } from "@angular/core";
import { ElementConfig } from "../../../core/types/element.config";
import { mergeConfigs } from "../../../core/helpers/config.helper";
import { provideAnimations } from "@angular/platform-browser/animations";

/** Dropdown config */
export type DropdownConfig = Partial<ElementConfig>
export const DropdownConfig: DropdownConfig = {
  display: 'grid',
  textAlign: 'text-start',
  padding: 'py-1',
  zIndex: 'z-10',
  width: 'min-w-52',
  overflow: 'overflow-hidden',
  position: {
    type: 'absolute',
    right: 'right-0',
    top: 'top-12'
  },
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-white',
      borderColor: 'border-neutral-200'
    },
    dark: {
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700'
    }
  }
}


/**
 * Dropdown config token
 */
export const DROPDOWN_CONFIG = new InjectionToken<DropdownConfig>('Dropdown config token');
/**
 *  Dropdown config provider
 * @param config The custom config
 * @returns The config provider
 */
export function provideDropdownConfig(config?: Partial<DropdownConfig>): Provider[] {
  return [
    provideAnimations(),
    {
      provide: DROPDOWN_CONFIG,
      useValue: mergeConfigs(DropdownConfig, config)
    }]
};

