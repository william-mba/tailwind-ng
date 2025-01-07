import { OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../config/reactive-config";

/**
 * @ngxtw Component's base state.
 */
export interface BaseState<T extends HTMLElement = HTMLElement> {
  /**
   * The initial classes names setted before the component initialization.
   */
  className?: string;
  /**
   * The component's class list instance.
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
   * Whether the component is focused.
   */
  readonly isFocused: boolean;
  /**
   * Whether the component or one of its children has focus.
   */
  readonly hasFocus: boolean;
  /**
   * Whether the component has visual focus.
   */
  readonly hasVisualFocus: boolean;
}

/**
 * @ngxtw Component's base actions.
 */
export interface BaseActions {
  /**
   * Disables the component.
   */
  disable(): void;
  /**
   * Enables the component.
   */
  enable(): void;
  /**
   * Focuses element based on the given options. If a component cannot be focused, nothing is done.
   * @returns The focused element. Otherwise, undefined.
   * @param options The focus options.
   * - `target` The target element to focus.
   * - `behavior` The focus behavior.
   *  ```bash
   *  - self: Focus the component's itself. (default)
   *  - nextSibling: Focus the target's next sibling.
   *  - previousSibling: Focus the target's previous sibling.
   *  - firstChild: Focus the target's first child.
   *  - lastChild: Focus the target's last child.
   *
   *  ```
   */
  focus(options?: FocusOptions): HTMLElement | undefined;

  /**
   * Sets visual focus by adding `data-active` attribute on target element using the given behavior. If the element cannot be visual focused, nothing is done.
   * - The visual focus appearance should be defined in the component's style config.
   * @returns The visual focused element. Otherwise, undefined.
   * @param options The focus options.
   * - `target` The target element to focus.
   * - `behavior` The focus behavior.
   *  ```bash
   *  - self: Set visual focus on the component's itself. (default)
   *  - nextSibling: Set visual focus on the target's next sibling.
   *  - previousSibling: Set visual focus on the target's previous sibling.
   *  - firstChild: Set visual focus on the target's first child.
   *  - lastChild: Set visual focus on the target's last child.
   *
   *  ```
   */
  setVisualfocus(options: FocusOptions): HTMLElement | undefined;
  /**
   * Removes visual focus on target element.
   *
   * Default target is the component's native element.
   */
  removeVisualfocus(target?: HTMLElement): void;
}

type FocusBehavior = 'self' | 'nextSibling' | 'previousSibling' | 'firstChild' | 'lastChild';
/**
 * Focus options.
 * - `target`: The target element to focus.
 * - `behavior`: The focus behavior.
 * For both options, the default value is the component's native element.
 */
export type FocusOptions = { target?: HTMLElement; behavior?: FocusBehavior; }

/**
 * @ngxtw Component's base events.
 */
export interface BaseEvents {
  /**
   * Event emitted when the component is disabled.
   */
  disabled: OutputEmitterRef<void>;
  /**
   * Event emitted when the component is enabled.
   */
  enabled: OutputEmitterRef<void>;
}
