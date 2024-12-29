import { Directive, ElementRef, inject, OnInit, OutputEmitterRef } from "@angular/core";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../config/reactive-config";
import { ElementState, ElementActions, ElementEvents } from "./element.interface";

@Directive({
  host: {
    '[class]': 'classList.value',
  },
  inputs: [{ name: 'className', alias: 'class' }],
  outputs: ['disabled', 'enabled'],
})
export abstract class ElementDirective<T extends HTMLElement = HTMLElement> implements ElementState<T>, ElementActions, ElementEvents, OnInit {
  readonly config = inject(ReactiveConfig)
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement;
  readonly classList = new ClassList();
  className: string = '';
  isHovered: boolean = false;
  hovered = new OutputEmitterRef<boolean>();
  disabled = new OutputEmitterRef<void>();
  enabled = new OutputEmitterRef<void>();

  get isDisabled(): boolean {
    return this.nativeElement.hasAttribute('disabled') || this.nativeElement.ariaDisabled === 'true';
  }

  ngOnInit(): void {
    this.classList.init(this.className);
    this.nativeElement.addEventListener('keydown', this.onKeyDown.bind(this), true);
    this.nativeElement.addEventListener('pointerdown', this.onPointerDown.bind(this), true);
    if (this.isDisabled) {
      this.onDisable();
    }
    this.onInit();
  }

  /**
   * Called when the component is initialized.
   */
  protected abstract onInit(): void;

  enable(): void {
    this.onEnable();
    this.onInit();
    this.enabled.emit();
  }

  private onEnable() {
    this.nativeElement.tabIndex = 0;
    this.nativeElement.ariaDisabled = 'false';
    this.nativeElement.removeAttribute('disabled');
  }

  disable(): void {
    this.onDisable();
    this.onInit();
    this.disabled.emit();
  }

  private onDisable() {
    this.nativeElement.tabIndex = -1;
    this.nativeElement.ariaDisabled = 'true';
    this.nativeElement.setAttribute('disabled', '');
  }

  /**
   * Event handler called when the component is pressed using a mouse, pen or touch.
   */
  protected onPointerDown(event: PointerEvent) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
  }

  /**
   * Event handler called when the pointer enter the component.
   */
  protected onPointerEnter(event: PointerEvent): void {
    if (event.type === 'pointerenter') {
      this.isHovered = true;
      this.hovered.emit(true);
    }
  }

  /**
   * Event handler called when the pointer leave the component.
   */
  protected onPointerLeave(event: PointerEvent): void {
    if (event.type === 'pointerleave') {
      this.isHovered = false;
      this.hovered.emit(false);
    }
  }

  /**
   * Event handler called when a key is pressed.
   */
  protected onKeyDown(event: KeyboardEvent): void {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
  }
}
