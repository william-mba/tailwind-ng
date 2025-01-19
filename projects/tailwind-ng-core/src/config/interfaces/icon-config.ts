import { SizingLayout } from "../../types/layout-config.type";
import { SizeOption } from "../../types/size-options.type";
import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface IconConfig extends Record<SizeOption, Modifier<'*', Pick<SizingLayout, 'size'>>> {
  base: ComponentConfig,
  source: Record<string, string>,
};
