import { InputSignalWithTransform, ModelSignal, OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { SizeOption } from "../types/size-options.type";

export interface ElementBaseState<T extends HTMLElement = HTMLElement> {
  /**
   * The initial class list setted before the component initialization.
   */
  readonly class: InputSignalWithTransform<string[], unknown>;
  /**
   * A reference to the class list instance of the component.
   */
  readonly classList: ClassList;
  readonly isDisabled: ModelSignal<boolean>;
  readonly nativeElement: T;
  readonly size?: ModelSignal<SizeOption>
}

export interface ElementBaseActions {
  disable(): void;
  enable(): void;
}

export interface ElementBaseEvents {
  /**
   * Event emitted when the component is disabled.
   */
  readonly disabled: OutputEmitterRef<void>;
}

/**
 * @ngxtw Element base interface
 */
export interface ElementBase<T extends HTMLElement = HTMLElement> extends ElementBaseState<T>, ElementBaseActions, ElementBaseEvents { }

