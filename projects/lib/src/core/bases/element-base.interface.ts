import { ClassList } from "../configs/classlist";
import { ClassName } from "../types/class-name.type";

export interface ElementBaseState<T extends HTMLElement> {
  /**
   * The initial class list setted before the component initialization.
   */
  readonly class: ClassName[];
  /**
   * A reference to the class list instance of the component.
   */
  readonly classList: ClassList;
  readonly disabled: boolean;
  readonly nativeElement: T;
}

export interface ElementBaseActions {
  enable(): void;
  disable(): void;
}

/**
 * @ngxtw Element base interface
 */
export interface ElementBase<T extends HTMLElement> extends ElementBaseState<T>, ElementBaseActions { }

