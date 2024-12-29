import { OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../config/reactive-config";

/**
 * @ngxtw Element's base state.
 */
export interface ElementState<T extends HTMLElement = HTMLElement> {
  /**
   * The initial class list setted before the component initialization.
   */
  className: string;
  /**
   * A reference to the class list instance of the component.
   */
  readonly classList: ClassList;
  /**
   * A reference to the reactive config instance.
   */
  readonly config: ReactiveConfig;
  /**
   * A reference to the component's native element.
   */
  readonly nativeElement: T;
  /**
   * Whether the component is disabled.
   */
  readonly isDisabled: boolean;
  /**
   * Whether the component is hovered.
   */
  readonly isHovered: boolean;
}

/**
 * @ngxtw Element's base actions.
 */
export interface ElementActions {
  /**
   * Disables the component.
   */
  disable(): void;
  /**
   * Enables the component.
   */
  enable(): void;
}

/**
 * @ngxtw Element's base events.
 */
export interface ElementEvents {
  /**
   * Event emitted when the component is disabled.
   */
  disabled: OutputEmitterRef<void>;
  /**
   * Event emitted when the component is enabled.
   */
  enabled: OutputEmitterRef<void>;
  /**
   * Event emitted when the component is hovered.
   */
  hovered: OutputEmitterRef<boolean>;
}
