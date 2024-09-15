import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from "@angular/core";
import { ComboboxItem } from "./combobox-item";
import { Combobox } from "../combobox";

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
export abstract class AbstractComboboxItem implements ComboboxItem, AfterViewInit {

  @Input() id!: string;
  @Input() value!: string;
  @Input() class!: string;
  @Input() combobox!: Combobox;
  @Output('select') onSelect: EventEmitter<ComboboxItem> = new EventEmitter();

  constructor(private el: ElementRef<HTMLElement>) {
    this.id = this.id || crypto.randomUUID();
  }

  ngAfterViewInit(): void {
    if (this.selected) {
      this.select();
    }
  }

  select(): void {
    this.combobox.select(this);
    this.onSelect.emit(this);
  }

  get element(): HTMLElement {
    return this.el.nativeElement;
  }

  get selected(): boolean {
    return this.combobox.isSelected(this);
  }
}
