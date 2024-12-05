import { InputSignal, InputSignalWithTransform, ModelSignal } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { SizeOption } from "../types/size-options.type";

export interface BaseElement<T extends HTMLElement = HTMLElement> {
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
  readonly size?: InputSignal<SizeOption>

  disable(): void;
  enable(): void;
}

