import { SizingLayout } from "../../types/layout-config.type";
import { SizeOption } from "../../types/size-options.type";
import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface IconConfig extends Record<SizeOption, Variant<'*', Pick<SizingLayout, 'size'>>> {
  base: ComponentConfig,
  source: Record<IconKey, string>,
};

export type IconKey =
  | string & {}
  | 'minus'
  | 'check'
  | 'tailwind-ng'
  | 'cmd-k'
  | 'dot'
  | 'npm'
  | 'github'
  | 'burger-menu'
  | 'strash'
  | 'star'
  | 'share'
  | 'arrow-right-circle'
  | 'archive-box'
  | 'document-duplicate'
  | 'chevron-down'
  | 'pencil-square'
  | 'user'
  | 'swatch'
  | 'language'
  | 'check-circle'
  | 'plus-circle'
  | 'cloud-arrow-down'
  | 'megaphone'
  | 'arrow-left-end-on'
  | 'video-camera'
  | 'arrow-up'
  | 'bars-3'
  | 'chevron-right'
  | 'chevron-left'
  | 'content-copy'
  | 'close'
  | 'check-2'
  | 'add'
  | 'more-ver'
  | 'more-horiz'
  | 'arrow-drop-down'
  | 'format-color-reset'
