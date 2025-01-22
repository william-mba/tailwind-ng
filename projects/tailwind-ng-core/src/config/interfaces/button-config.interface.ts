import { ComponentConfig } from "../../types/component-config.type";
import { BoxShadow, BoxShadowColor } from "../../types/effects";
import { SizeOptions } from "../../types/size-options.type";

/** Button variant */
export type ButtonVariant = 'primary' | 'secondary' | 'tonal' | 'text';

export interface ButtonConfig extends SizeOptions {
  primary: ComponentConfig,
  secondary: ComponentConfig,
  tonal: ComponentConfig,
  text: ComponentConfig,
  fab: {
    boxShadow?: BoxShadow
    boxShadowColor?: BoxShadowColor
  }
}
