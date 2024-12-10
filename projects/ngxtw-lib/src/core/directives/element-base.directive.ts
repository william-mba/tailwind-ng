import { Directive, ElementRef, inject, input, model, OnInit } from "@angular/core";
import { BaseElement } from "./element-base.interface";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../public-api";
import { stringToArray } from "../helpers/string.helper";


@Directive({
  host: {
    '[class]': 'classList.value',
    '[attr.disabled]': 'isDisabled() ? "" : null',
    '[attr.aria-disabled]': 'isDisabled() ? "" : null',
    '[attr.tabindex]': 'isDisabled() ? -1 : null',
  }
})
export abstract class ElementBaseDirective<T extends HTMLElement = HTMLElement> implements BaseElement<T>, OnInit {
  protected readonly _config = inject(ReactiveConfig)
  readonly nativeElement: T = inject(ElementRef).nativeElement;

  /**
   * The initial class list setted before the component initialization.
   */
  class = input([], { transform: stringToArray });
  readonly classList = new ClassList(this.class());
  isDisabled = model(false, { alias: 'disabled' });

  ngOnInit(): void {
    this.onInit();
  }

  /**
   * Called when the component is initialized.
   */
  protected abstract onInit(): void;

  enable(): void {
    this.isDisabled.set(false);
    this.nativeElement.addEventListener('click', this.nativeElement.click);
    this.onInit();
  }

  disable(): void {
    this.isDisabled.set(true);
    this.nativeElement.removeEventListener('click', this.nativeElement.click);
    this.onInit();
  }
}
