import { ComponentConfig } from "../../types/component-config.type";
import { SpacingLayout } from "../../types/layout-config.type";
import { SizeOption } from "../../types/size-options.type";

export interface BadgeConfig extends Record<SizeOption, Pick<SpacingLayout, 'padding'>> {
  base: ComponentConfig;
};
