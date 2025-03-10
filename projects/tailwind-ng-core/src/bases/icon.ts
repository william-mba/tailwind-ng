import { Directive, inject, Input } from "@angular/core";
import { classlist } from "../utils";
import { BaseDirective } from "../directives";
import { InjectionTokenFactory } from "../tokens/injection-token.factory";
import { SizeOption } from "../types/size-options.type";

/**
 * @TailwindNG Icon component interface.
 */
export interface Icon {
  name: IconName;
  size: SizeOption;
}

/**
 * Checks if the component is an Icon.
 * If so, you can safely access the Icon members inside this block scope.
 */
export function isIcon(component: unknown): component is Icon {
  return component instanceof IconBase;
}

const ICON_SIZE = InjectionTokenFactory.create<Record<SizeOption, string>>(
  {
    xs: '*:size-3',
    sm: '*:size-4',
    md: '*:size-5',
    lg: '*:size-6',
    xl: '*:size-7'
  },
  'ICON_SIZE'
);
export const ICON_CONFIG = InjectionTokenFactory.create<string>('', 'ICON_CONFIG');
export const ICON_MAP = InjectionTokenFactory.create<IconMap>({}, 'ICON_CONFIG');

@Directive()
export abstract class IconBase extends BaseDirective implements Icon {
  @Input({ required: true }) name!: IconName;
  @Input() size: SizeOption = 'md';

  protected override buildStyle(): void {
    const className = `${inject(ICON_SIZE)[this.size]} ${inject(ICON_CONFIG)}`;
    this.nativeElement.className = classlist(this.class).set(className).with(this.nativeElement.className);
    this.nativeElement.innerHTML = inject(ICON_MAP)[this.name] || '';
  }
}

export interface IconConfig {
  className?: string,
  map?: IconMap
}

export type IconMap = Partial<Record<IconName, string>>;
export type IconName =
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
  | 'moon'
  | 'sun'
  | 'sparkles'
  | 'check-badge'
  | 'beaker'
  | 'rocket'
  | 'bolt'
  | 'accessibility'
  | 'mix-vertical'
  | 'license'
