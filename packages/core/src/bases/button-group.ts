import { Directive } from '@angular/core'
import { BaseDirective } from '../directives'
import { InjectionTokenFactory } from '../tokens/injection-token.factory'

export const BUTTON_GROUP_CONFIG = InjectionTokenFactory.create<string>('', 'BUTTON_GROUP_CONFIG')

@Directive()
export abstract class ButtonGroupBase extends BaseDirective {}
