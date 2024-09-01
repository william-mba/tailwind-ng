import { ButtonSizeOptions, ButtonVariant } from "./button.config";

/**
 * Ngx-twcss Button
 */
export interface Button {
  class: string;
  fab: boolean;
  icon: boolean;
  variant: ButtonVariant;
  match: 'first' | 'last';
  size: keyof ButtonSizeOptions;
}
