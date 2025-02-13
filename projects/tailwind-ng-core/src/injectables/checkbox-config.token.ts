import { ConfigTypeOf } from "../config/config-type-of";
import { InjectionTokenFactory } from "./injection-token.factory";

export const CHECKBOX_CONFIG = InjectionTokenFactory.create<ConfigTypeOf<'Checkbox'>>({}, 'CHECKBOX_CONFIG');
