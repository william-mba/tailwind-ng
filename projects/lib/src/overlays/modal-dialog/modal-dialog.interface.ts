import { PopupBaseActions, PopupBaseEvents, PopupBaseState } from "../../core/bases/popup-base.interface";
import { ClassList } from "../../core/configs/classlist";
import { ClassName } from "../../core/types/class-name.type";

export interface ModalDialogState extends PopupBaseState {
  /**
   * The initial class list of the dialog's scrim.
   */
  readonly scrim: ClassName[];
  /**
   * The initial class list of the dialog's backdrop.
   */
  readonly backdrop: ClassName[];
  /**
   * A reference to the class list instance of the dialog's backdrop.
   */
  readonly backdropClassList: ClassList;
  /**
   * A reference to the class list instance of the dialog's scrim.
   */
  readonly scrimClassList: ClassList;
}

export interface ModalDialogActions extends PopupBaseActions { }

export interface ModalDialogEvents extends PopupBaseEvents { }

/**
 * @ngxtw Modal Dialog
 */
export interface ModalDialog extends ModalDialogState, ModalDialogActions, ModalDialogEvents { }
