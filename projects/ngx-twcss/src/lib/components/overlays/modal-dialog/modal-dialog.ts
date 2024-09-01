import { ModalDialogConfig } from "./modal-dialog.config";

/**
 * Ngx-twcss Modal Dialog
 */
export interface ModalDialog {
  class: string;
  scrim: string;
  backdrop: string;
  opened: boolean;
  setConfig(config: Partial<ModalDialogConfig>): void;
}
