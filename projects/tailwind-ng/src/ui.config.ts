import { Provider } from "@angular/core";
import { ElementsConfig, provideElementsConfig } from "./elements";
import { FormsConfig, provideFormsConfig } from "./forms";
import { OverlaysConfig, provideOverlaysConfig } from "./overlays";

/**
 * @TailwindNG UI configuration interface.
 */
export interface UIConfig {
  elements: Partial<ElementsConfig>;
  forms: Partial<FormsConfig>;
  overlays: Partial<OverlaysConfig>;
}

/**
 * Provides the UI configuration tokens.
 * @returns An array of config providers
 */
export function provideUIConfig(customization?: Partial<UIConfig>): Provider[] {
  return [
    provideElementsConfig(customization?.elements),
    provideFormsConfig(customization?.forms),
    provideOverlaysConfig(customization?.overlays),
  ]
}
