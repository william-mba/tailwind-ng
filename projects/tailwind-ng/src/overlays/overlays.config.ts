import { ConfigTypeOf } from "@tailwind-ng/core";
import { Provider } from "@angular/core";
import { provideDialog } from "./dialog";
import { provideBackdrop } from "./backdrop/backdrop.directive.config";

/**
 * @TailwindNG Overlays config interface.
 */
export interface OverlaysConfig {
  dialog?: ConfigTypeOf<'Dialog'>;
  backdrop?: ConfigTypeOf<'Backdrop'>;
}

/**
 * @TailwindNG Overlays config provider.
 */
export function provideOverlays(customization?: OverlaysConfig): Provider[] {
  return [
    provideDialog(customization?.dialog),
    provideBackdrop(customization?.backdrop),
  ]
}
