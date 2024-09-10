import { ModalDialogConfig } from "./modal-dialog.config";

/**
 * ngxtw Modal Dialog
 */
export interface ModalDialog {
  opened: boolean;
  class: string;
  scrim: string;
  backdrop: string;
  setConfig(config: Partial<ModalDialogConfig>): void;
}
