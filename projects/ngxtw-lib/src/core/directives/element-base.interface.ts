import { OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { SizeOption } from "../types/size-options.type";

export interface BaseElement<T extends HTMLElement = HTMLElement> {
  /**
 * The initial class list setted before the component initialization.
 */
  readonly class: string[];
  /**
   * A reference to the class list instance of the component.
   */
  readonly classList: ClassList;
  readonly isDisabled: boolean;
  readonly nativeElement: T;
  readonly size?: SizeOption

  disable(): void;
  enable(): void;

  disabled: OutputEmitterRef<void>;
  enabled: OutputEmitterRef<void>;
}

