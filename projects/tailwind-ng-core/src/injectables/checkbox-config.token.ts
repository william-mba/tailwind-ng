import { ConfigTypeOf } from "../config/config-type";
import { InjectionTokenFactory } from "./injection-token.factory";

export const CHECKBOX_CONFIG = InjectionTokenFactory.create<Partial<ConfigTypeOf<'Checkbox'>>>({}, 'CHECKBOX_CONFIG');
