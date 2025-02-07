import { CheckboxIcon } from "../interfaces/checkbox";
import { InjectionTokenFactory } from "./injection-token.factory";

export const CHECKBOX_ICON = InjectionTokenFactory
  .create<CheckboxIcon>({
    onIndeterminate: 'minus',
    onChecked: 'check',
    size: 'sm'
  }, 'CHECKBOX_ICON');
