import { ModalDialogConfig } from "./modal-dialog.config";

/**
 * Ngx-twcss Modal Dialog
 */
export interface ModalDialog {
  opened: boolean;
  class: string;
  scrim: string;
  backdrop: string;
  setConfig(config: Partial<ModalDialogConfig>): void;
}
