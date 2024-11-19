import { booleanAttribute, Directive, ElementRef, inject, Input, OnInit } from "@angular/core";
import { ClassName } from "../types/class-name.type";
import { stringToArray } from "../utils/string.util";
import { ElementBase } from "./element-base.interface";
import { ReactiveConfigManager } from "../configs/reactive-config-manager";
import { ClassList } from "../configs/classlist";

/**
 * @ngxtw Element base directive
 */
@Directive({
  host: {
    '[class]': 'classList.value',
    '[attr.disabled]': 'disabled ? "" : null',
  }
})
export abstract class ElementBaseDirective<T extends HTMLElement> implements ElementBase<T>, OnInit {
  protected readonly _configManager = inject(ReactiveConfigManager)
  readonly nativeElement: T = inject(ElementRef).nativeElement;
  readonly classList = new ClassList();

  /**
   * The initial class list setted before the component initialization.
   */
  @Input({ transform: stringToArray }) class: ClassName[] = [];

  ngOnInit(): void {
    this.classList.init(this.class)
    this.buildStyle();
  }

  /** Build the class list that define the component style */
  protected abstract buildStyle(): void;

  @Input({ transform: booleanAttribute }) disabled = false;
  enable(): void {
    this.disabled = false;
  }
  disable(): void {
    this.disabled = true;
  }
}
