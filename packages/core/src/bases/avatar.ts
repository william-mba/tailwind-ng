import { Directive } from '@angular/core'
import { BaseDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'
import { SizeOption } from '../types/size-options.type'
import { BaseActions, BaseProps } from '../directives'

/**
 * @TailwindNG Avatar component interface.
 */
export interface Avatar extends BaseProps, BaseActions {
  size: SizeOption
}

export interface AvatarConfig extends Partial<Record<SizeOption, string>> {
  className?: string
}

/**
 * Checks if the component is an Avatar.
 * If so, you can safely access the Avatar members inside this block scope.
 */
export function isAvatar(component: unknown): component is Avatar {
  return component instanceof AvatarBase
}
export const AVATAR_CONFIG = InjectionTokenFactory.create<
  Partial<AvatarConfig>
>({}, 'AVATAR_CONFIG')

@Directive()
export abstract class AvatarBase extends BaseDirective {}
