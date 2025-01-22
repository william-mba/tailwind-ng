import { ComponentConfig } from "../../types/component-config.type";
import { SizingLayout } from "../../types/layout-config.type";
import { SizeOption } from "../../types/size-options.type";

export interface AvatarConfig extends Record<SizeOption, Pick<SizingLayout, 'size'>> {
  base: ComponentConfig
};
