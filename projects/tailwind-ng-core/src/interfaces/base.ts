import { InputSignal } from "@angular/core";
import { ClassList } from "../config";
import { Config } from "../types";

/**
 * @TailwindNG Component's base state.
 */
export interface BaseStates<T extends HTMLElement = HTMLElement> {
  /**
   * A property to customize the component's style.
   *
   * Get the final class list value using:
   * - `<componentRef>.classList.value()` or
   * - `<componentRef>.nativeElement.className`.
   */
  readonly class: InputSignal<string | string[] | Config | undefined | null>;
  /**
   * The component's class list instance.
   */
  readonly classList: ClassList;
  /**
   * A reference to the component's native element.
   */
  readonly nativeElement: T;
  /**
   * Whether the component is disabled.
   */
  readonly disabled: boolean;
  /**
   * Whether the component is focused.
   */
  readonly isFocused: boolean;
  /**
   * Whether the component or one of its descendant has focus.
   */
  readonly hasFocus: boolean;
  /**
   * Whether the component has visual focus.
   */
  readonly hasVisualFocus: boolean;
  /**
   * Whether the component is hovered.
   */
  readonly isHovered: boolean;
}

/**
 * @TailwindNG Component's base actions.
 */
export interface BaseActions {
  /**
   * Focuses an element and return it.
   * If it cannot be focused, nothing is done and `undefined` is returned.
   */
  focus(options?: FocusOptions): HTMLElement | undefined;

  /**
   * Sets visual focus on an element and return it.
   * If it cannot be visual focused, nothing is done and `undefined` is returned.
   * Visual focus is set by adding the `data-visual-focused` attribute on that element.
   * @NOTE The visual focus appearance should be defined in the component's style/config.
   */
  setVisualfocus(options: FocusOptions): HTMLElement | undefined;
  /**
   * Removes visual focus on target element.
   *
   * Default target is the component's native element.
   */
  removeVisualfocus(target?: HTMLElement): void;
  /**
   * Scrolls the element into the view. Making it visible to the user.
   */
  scrollIntoView(options: ScrollIntoViewOptions): void;
}

type FocusBehavior = 'self' | 'nextSibling' | 'previousSibling' | 'firstChild' | 'lastChild';
/**
 * Focus options.
 */
export interface FocusOptions {
  /**
   * The target element to focus. Default is the component's native element.
   */
  target?: HTMLElement;
  /**
   * The focus behavior.
   *  - `self`: Focus the component's itself. (default)
   *  - `nextSibling`: Focus the target's next sibling.
   *  - `previousSibling`: Focus the target's previous sibling.
   *  - `firstChild`: Focus the target's first child.
   *  - `lastChild`: Focus the target's last child.
   *
   */
  behavior?: FocusBehavior;
  /**
   * Whether to prevent scrolling the target element into view. Default it's true.
   */
  preventScroll?: boolean;
}
