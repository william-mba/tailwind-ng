import { AfterViewInit, Directive, ElementRef, inject, input, model, OnInit, output } from "@angular/core";
import { ElementBase as IElementBase } from "./element-base.interface";
import { ClassList } from "../../config/classlist";
import { ReactiveConfig } from "../../public-api";
import { stringToArray } from "../helpers/string.helper";
import { SizeOption } from "../types/size-options.type";

/**
 * @ngxtw Element base directive
 */
@Directive({
  host: {
    '[class]': 'classList.value()',
    '[attr.size]': 'size() || null',
    '[attr.disabled]': 'isDisabled() ? "" : null',
    '[attr.aria-disabled]': 'isDisabled() ? "" : null',
    '[attr.tabindex]': 'isDisabled() ? -1 : null',
  }
})
export abstract class ElementBase<T extends HTMLElement> implements IElementBase<T>, OnInit, AfterViewInit {
  protected readonly _config = inject(ReactiveConfig)
  readonly nativeElement: T = inject(ElementRef).nativeElement;
  readonly classList = new ClassList();
  size = model<SizeOption>('md');

  /**
   * The initial class list setted before the component initialization.
   */
  class = input([], { transform: stringToArray });
  isDisabled = model(false, { alias: 'disabled' });
  disabled = output();

  ngOnInit(): void {
    this.classList.base.next(this.class())
    this.buildStyle();
  }

  ngAfterViewInit(): void {
    if (this.nativeElement.hasAttribute('disabled') ||
      this.nativeElement.hasAttribute('aria-disabled')) {
      this.disable();
    }
  }

  /** Build the class list that define the component style */
  protected abstract buildStyle(): void;

  enable(): void {
    this.isDisabled.set(false);
    this.nativeElement.addEventListener('click', this.nativeElement.click);
    this.buildStyle();
  }

  disable(): void {
    this.isDisabled.set(true);
    this.disabled.emit();
    this.nativeElement.removeEventListener('click', this.nativeElement.click);
    this.buildStyle();
  }
}
