import { CheckboxIcon } from "../interfaces/checkbox-icon";
import { InjectionTokenFactory } from "./injection-token.factory";

export const CHECKBOX_ICON = InjectionTokenFactory
  .create<CheckboxIcon>({
    onIndeterminate: 'minus',
    onChecked: 'check',
    size: 'sm'
  }, 'CHECKBOX_ICON');
