import { ClassList } from "../config";
import { Config } from "../types";

/**
 * @TailwindNG Component's base state.
 */
export interface BaseStates<T extends HTMLElement = HTMLElement> {
  /**
   * A space-separated list of classes to customize the element.
   *
   * To get the full list of classes of the element, use `<element>.classList.value()` or `<element>.nativeElement.className` where `<element>` is the component instance ref.
   */
  readonly class?: string | string[] | Config;
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
 * @TailwindNG Component's base actions.
 */
export interface BaseActions {
  /**
   * Focuses element based on the given options. If a component cannot be focused, nothing is done.
   * @returns The focused element. Otherwise, undefined.
   */
  focus(options?: FocusOptions): HTMLElement | undefined;

  /**
   * Sets visual focus by adding `data-visual-focused` attribute on target element using the given behavior. If the element cannot be visual focused, nothing is done.
   * - The visual focus appearance should be defined in the component's style config.
   * @returns The visual focused element. Otherwise, undefined.
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
