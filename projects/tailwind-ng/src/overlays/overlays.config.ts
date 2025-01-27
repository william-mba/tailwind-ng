import { Config, DialogConfig } from "@tailwind-ng/core";
import { Provider } from "@angular/core";
import { provideDialog } from "./dialog";

/**
 * @TailwindNG Overlays config interface.
 */
export interface OverlaysConfig extends Config {
  dialog?: DialogConfig;
}

/**
 * @TailwindNG Overlays config provider.
 */
export function provideOverlays(customization?: OverlaysConfig): Provider[] {
  return [
    provideDialog(customization?.dialog)
  ]
}
