import { ButtonConfig } from "@tailwind-ng/core";
import { InjectionTokenFactory } from "../injection-token.factory";

export const BUTTON_CONFIG = InjectionTokenFactory.create<Partial<ButtonConfig>>({}, 'BUTTON_CONFIG');
