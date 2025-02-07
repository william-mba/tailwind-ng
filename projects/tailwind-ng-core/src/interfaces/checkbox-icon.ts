import { SizeOption } from "../types/size-options.type";


/**
 * The icon to display when the checkbox is indeterminate or checked.
 * Default is `{ indeterminate: 'minus', checked: 'check' }`
 */
export interface CheckboxIcon {
  /**
   * The name of the icon to display when the checkbox is indeterminate.
   * Default is `'minus'`. The icon must be configured. Otherwise, it will not display.
   */
  onIndeterminate: string,
  /**
   * The name of the icon to display when the checkbox is checked.
   * Default is `'check'`. The icon must be configured. Otherwise, it will not display.
   */
  onChecked: string,
  /**
   * The size of the icon. Default is `'sm'`.
   */
  size: SizeOption;
}
