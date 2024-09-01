import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { ComboboxItem } from "./combobox-item";

@Component({
  template: '',
  host: {
    '[id]': 'id',
    '[class]': 'class',
    '(click)': 'select()',
    '[attr.value]': 'value',
    '[attr.selected]': 'selected',
  },
})
export abstract class BaseComboboxItemComponent implements ComboboxItem {
  @Input()
  public value!: string;
  @Input()
  public class!: string;
  @Input()
  public selected: boolean = false;
  @Input()
  public id: string = crypto.randomUUID();
  @Output()
  public onSelect: EventEmitter<ComboboxItem> = new EventEmitter();

  constructor(private element: ElementRef<HTMLElement>) { }

  public select(): void {
    this.selected = true;
    this.onSelect.emit(this);
  }

  public scrollIntoView(): void {
    // Use to prevent scrollIntoView from being called before the parent element animation is completed.
    // otherwise, the scrollIntoView method will not work as expected.
    setTimeout(() => {
      this.element.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest' }), 75
    });
  }
}
