import { Directive, ElementRef, inject, OnInit, OutputEmitterRef } from "@angular/core";
import { BaseElement } from "./element-base.interface";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../public-api";
import { stringToArray } from "../helpers/string.helper";

@Directive({
  host: {
    '[class]': 'classList.value',
    '[attr.disabled]': 'isDisabled ? "" : null',
    '[attr.aria-disabled]': 'isDisabled ? "" : null',
    '[attr.tabindex]': 'isDisabled ? -1 : null',
  },
  inputs: [{ name: 'class', transform: stringToArray }, 'isDisabled'],
  outputs: ['disabled', 'enabled'],
})
export abstract class ElementBaseDirective<T extends HTMLElement = HTMLElement> implements BaseElement<T>, OnInit {
  readonly config = inject(ReactiveConfig)
  readonly nativeElement: T = inject(ElementRef<T>).nativeElement;
  readonly classList = new ClassList();
  class: string[] = [];
  isDisabled = false;
  disabled = new OutputEmitterRef<void>();
  enabled = new OutputEmitterRef<void>();

  ngOnInit(): void {
    this.classList.init(this.class);
    this.onInit();
  }

  /**
   * Called when the component is initialized.
   */
  protected abstract onInit(): void;

  enable(): void {
    this.isDisabled = false;
    this.nativeElement.addEventListener('click', this.nativeElement.click);
    this.onInit();
    this.enabled.emit();
  }

  disable(): void {
    this.isDisabled = true;
    this.nativeElement.removeEventListener('click', this.nativeElement.click);
    this.onInit();
    this.disabled.emit();
  }
}
