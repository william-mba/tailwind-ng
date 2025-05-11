import {
  Directive,
  ElementRef,
  inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  runInInjectionContext,
} from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { isEnterOrSpace, isNavigation } from '../guards'

/**
 * @TailwindNG Component's base props.
 */
export interface BaseProps<T extends HTMLElement = HTMLElement> {
  /**
   * A property to customize the component's style.
   *
   * Get the final class list value using:
   * - `<componentRef>.classList.value` or
   * - `<componentRef>.nativeElement.className`.
   */
  readonly class: string | null
  /**
   * A reference to the component's native element.
   */
  readonly nativeElement: T
  /**
   * Whether the component is disabled.
   */
  readonly disabled: boolean
  /**
   * Whether the component is focused.
   */
  readonly isFocused: boolean
  /**
   * Whether the component or one of its descendant has focus.
   */
  readonly hasFocus: boolean
  /**
   * Whether the component has visual focus.
   */
  readonly hasVisualFocus: boolean
  /**
   * Whether the component is hovered.
   */
  readonly isHovered: boolean
}

/**
 * @TailwindNG Component's base actions.
 */
export interface BaseActions {
  /**
   * Focuses an element and return it.
   * If it cannot be focused, nothing is done and `undefined` is returned.
   */
  focus(options?: FocusOptions): HTMLElement | undefined

  /**
   * Sets visual focus on an element and return it.
   * If it cannot be visual focused, nothing is done and `undefined` is returned.
   * Visual focus is set by adding the `data-visual-focused` attribute on that element.
   * @NOTE The visual focus appearance should be defined in the component's style/config.
   */
  setVisualfocus(options: FocusOptions): HTMLElement | undefined
  /**
   * Removes visual focus on target element.
   *
   * Default target is the component's native element.
   */
  removeVisualfocus(target?: HTMLElement): void
  /**
   * Scrolls element into the view. Making it visible to the user.
   */
  scrollIntoView(options?: ScrollIntoViewOptions, element?: HTMLElement): void
}

type FocusBehavior =
  | 'self'
  | 'nextSibling'
  | 'previousSibling'
  | 'firstChild'
  | 'lastChild'
/**
 * Focus options.
 */
export interface FocusOptions {
  /**
   * The target element to focus. Default is the component's native element.
   */
  target?: HTMLElement
  /**
   * The focus behavior.
   *  - `self`: Focus the component's itself. (default)
   *  - `nextSibling`: Focus the target's next sibling.
   *  - `previousSibling`: Focus the target's previous sibling.
   *  - `firstChild`: Focus the target's first child.
   *  - `lastChild`: Focus the target's last child.
   *
   */
  behavior?: FocusBehavior
  /**
   * Whether to prevent scrolling the target element into view. Default it's true.
   */
  preventScroll?: boolean
}

/**
 * @TailwindNG Base component directive.
 */
@Directive({
  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled || null',
  },
})
export abstract class BaseDirective<T extends HTMLElement = HTMLElement>
  implements BaseProps<T>, BaseActions, OnInit, OnDestroy
{
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement
  protected readonly _document = inject(DOCUMENT)
  private readonly _injector = inject(Injector)
  private _isInitialized = false

  protected get isInitialized(): boolean {
    return this._isInitialized
  }

  @Input() class: string | null = null

  private _isDisabled = false

  @Input()
  set disabled(value: boolean | '') {
    const newState = value === '' || value
    if (this._isDisabled !== newState) {
      this._isDisabled = newState
      if (this._isInitialized) {
        this.buildStyle()
      }
    }
  }
  get disabled(): boolean {
    return this._isDisabled
  }

  get isFocused(): boolean {
    return this.nativeElement === this._document.activeElement
  }

  get hasFocus(): boolean {
    return this.nativeElement.contains(this._document.activeElement)
  }

  isHovered = false

  ngOnInit(): void {
    runInInjectionContext(this._injector, () => {
      this.buildStyle()
    })
    this.addEventListeners()
    this._isInitialized = true
  }

  ngOnDestroy(): void {
    this.removeEventListeners()
  }

  /**
   * Build the component's style.
   * @NOTE This method automatically runs inside an injection context, only during the component's initialization. If you have injected dependencies and want to call this method manually, make sure to run it inside an injection context using `runInInjectionContext` Angular's function for instance.
   */
  protected abstract buildStyle(): void

  /**
   * Adds event listeners to the component.
   *
   * This method is called during the component's initialization.
   * Override this method to add additional event listeners.
   * Those listeners will be removed when the component is destroyed.
   */
  protected addEventListeners() {
    this.nativeElement.addEventListener(
      'click',
      this.preventInteractionIfDisabled.bind(this),
      true
    )
    this.nativeElement.addEventListener(
      'pointerdown',
      this.preventInteractionIfDisabled.bind(this),
      true
    )
    this.nativeElement.addEventListener(
      'keydown',
      this.onKeyboardEvent.bind(this),
      false
    )
  }

  /**
   * Removes event listeners from the component.
   *
   * This method is called when the component is destroyed.
   * Override this method to remove additional event listeners.
   */
  protected removeEventListeners() {
    this.nativeElement.removeEventListener(
      'click',
      this.preventInteractionIfDisabled.bind(this),
      true
    )
    this.nativeElement.removeEventListener(
      'pointerdown',
      this.preventInteractionIfDisabled.bind(this),
      true
    )
    this.nativeElement.removeEventListener(
      'keydown',
      this.onKeyboardEvent.bind(this),
      false
    )
  }

  // A disabled element should not be interactive.
  protected preventInteractionIfDisabled(event: Event): void {
    if (this.disabled) {
      event.preventDefault()
      event.stopImmediatePropagation()
    }
  }

  protected onKeyboardEvent(event: KeyboardEvent): void {
    // Prevent scrolling when using arrow up and down keys.
    if (isEnterOrSpace(event.key) || isNavigation(event.key)) {
      event.preventDefault()
    }
  }

  focus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.disabled) return
    const { behavior = 'self', preventScroll = true } = options
    let { target = this.nativeElement } = options

    if (!target) return

    if (behavior === 'self') {
      requestAnimationFrame(() => {
        target.focus({ preventScroll: preventScroll })
      })
      return target
    }

    switch (behavior) {
      case 'nextSibling':
        target = target?.nextElementSibling as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement
        }
        break
      case 'previousSibling':
        target = target?.previousElementSibling as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement
        }
        break
      case 'firstChild':
        target = target?.firstElementChild as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement
        }
        break
      case 'lastChild':
        target = target?.lastElementChild as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement
        }
        break
    }
    requestAnimationFrame(() => {
      target?.focus({ preventScroll: preventScroll })
    })
    return target
  }

  private currentVisualFocusedElement?: HTMLElement
  setVisualfocus(options: FocusOptions = {}): HTMLElement | undefined {
    if (this.disabled) return

    const { behavior = 'self' } = options
    let { target = this.nativeElement } = options

    if (!target) return

    if (behavior === 'self') {
      if (this.currentVisualFocusedElement) {
        this.currentVisualFocusedElement.removeAttribute('data-visual-focused')
      }
      target.setAttribute('data-visual-focused', '')
      this.currentVisualFocusedElement = target
      return target
    }

    switch (behavior) {
      case 'nextSibling':
        target = target?.nextElementSibling as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement
        }
        break
      case 'previousSibling':
        target = target?.previousElementSibling as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement
        }
        break
      case 'firstChild':
        target = target?.firstElementChild as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.nextElementSibling as HTMLElement
        }
        break
      case 'lastChild':
        target = target?.lastElementChild as HTMLElement
        while (target && this.isDisabledElement(target)) {
          target = target?.previousElementSibling as HTMLElement
        }
        break
    }
    if (this.currentVisualFocusedElement) {
      this.currentVisualFocusedElement.removeAttribute('data-visual-focused')
    }
    if (target) {
      target.setAttribute('data-visual-focused', '')
      this.scrollIntoView({ block: 'nearest', inline: 'nearest' }, target)
    }
    this.currentVisualFocusedElement = target
    return target
  }

  removeVisualfocus(target: HTMLElement = this.nativeElement): void {
    if (target === this.currentVisualFocusedElement) {
      this.currentVisualFocusedElement = undefined
    }
    target.removeAttribute('data-visual-focused')
  }

  scrollIntoView(
    options: ScrollIntoViewOptions = {},
    element: HTMLElement = this.nativeElement
  ): void {
    requestAnimationFrame(() => {
      const {
        block = 'nearest',
        inline = 'nearest',
        behavior = 'instant',
      } = options
      element.scrollIntoView({
        block: block,
        inline: inline,
        behavior: behavior,
      })
    })
  }

  get hasVisualFocus(): boolean {
    return this.nativeElement.hasAttribute('data-visual-focused')
  }

  private isDisabledElement(element: HTMLElement): boolean {
    return element.hasAttribute('disabled') || element.ariaDisabled === 'true'
  }

  /**
   * Generates a basic random ID.
   */
  protected randomId(prefix = 'tw'): string {
    return `${prefix}-${Math.random().toString(16)}`
  }
}
