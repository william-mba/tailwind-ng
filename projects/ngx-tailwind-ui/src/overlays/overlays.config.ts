import { Config, DialogConfig } from "@ngx-tailwind/core";
import { Provider } from "@angular/core";
import { provideDialogConfig } from "./dialog";

/**
 * @ngx-tailwind Overlays configuration interface.
 */
export interface OverlaysConfig extends Config {
  dialog?: DialogConfig;
}

/**
 * Provides the Overlays configuration tokens.
 */
export function provideOverlaysConfig(customization?: OverlaysConfig): Provider[] {
  return [
    provideDialogConfig(customization?.dialog)
  ]
}
