import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown.component';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Icon } from '../icon/icon.component';

@Component({
  selector: 'tw-comboboxe-item',
  standalone: true,
  imports: [Icon, NgIf],
  host: {
    '(click)': 'select.emit(value)',
    '[class]': 'stateClasses',
    class: 'flex items-center hover:text-white hover:bg-blue-600 h-fit px-4 py-2 gap-1 hover:font-extrabold cursor-pointer relative'
  },
  template: `
  <tw-icon *ngIf="canDisplayOn('left')" source="heroicons" name="check" class="my-auto absolute inset-y-0 left-3"/>
  <span>{{ value }}</span>
  <tw-icon *ngIf="canDisplayOn('right')" source="heroicons" name="check"/>
  `,
})
export class ComboboxeItem implements OnInit {
  protected stateClasses!: Record<string, boolean>;

  @Input() value!: string;
  @Input() iconPosition!: 'left' | 'right';
  @Input() selected: boolean = false;
  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.setStateClasses();
  }

  setStateClasses(): void {
    this.stateClasses = {
      'justify-between': this.iconPosition === 'right',
      'pl-10': this.iconPosition === 'left',
      'font-semibold': this.selected
    }
  }

  canDisplayOn(side: 'left' | 'right'): boolean {
    return this.iconPosition === side && this.selected;
  }
}

@Component({
  selector: 'tw-comboboxe',
  standalone: true,
  imports: [Dropdown, Button, Icon, FormsModule, ComboboxeItem, NgFor, NgIf],
  host: {
    class: 'relative h-max',
    '(click)': 'onClick()'
  },
  templateUrl: './comboboxe.component.html'
})
export class Comboboxe implements OnInit {
  @Input() open: boolean = false;
  @Input() sort: boolean = false;
  @Input() items: string[] = [];
  @Input() label!: string;
  @Input() itemMinLength: number = 2;
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  private _items!: string[];
  protected inputValue!: string;
  protected id: string = crypto.randomUUID();

  ngOnInit(): void {
    this._items = this.sort ? this.items.sort() : this.items;
    this.inputValue = this._items[0];
  }

  @ViewChild('textInput', { static: true, read: ElementRef }) input!: ElementRef<HTMLInputElement>;
  @ViewChildren(ComboboxeItem, { read: ElementRef }) comboboxItems!: ElementRef<HTMLElement>[];

  onClick(): void {
    if (this.open) {
      this.input.nativeElement.focus();
      this.scrollToSelectedItem();
    }
  }

  toggle(): void {
    this.open = !this.open;
  }

  resetList(): void {
    this.items = this._items;
    this.scrollToSelectedItem();
  };

  canOpenDropdown(): boolean {
    return this.open && (this.items.length > 0);
  }

  canDisplayResetIcon(): boolean {
    return (this.items.length <= 3) && this.open;
  }

  private scrollToSelectedItem(): void {
    // if the input value is less than the minimum word length, do nothing
    if (this.inputValueIsTooShort()) return;

    const item = this.comboboxItems.find((item) => this.isSelected(item.nativeElement.textContent || ''));

    if (!item) return;

    item.nativeElement.scrollIntoView({ behavior: "instant", block: "nearest" });
  }

  isSelected = (item: string): boolean => this.inputValue.trim() === item.trim();

  inputValueIsTooShort = (): boolean => this.itemMinLength > this.inputValue.trim().length;

  selectValue(value: string): void {
    this.open = false;
    this.inputValue = value;
    this.itemSelected.emit(value);
  }

  filterItems(inputValue: string): void {
    this.open = true;

    if (this.inputValueIsTooShort()) {
      this.resetList();
      return;
    }

    const searchTerm = inputValue.toLocaleLowerCase().trim();
    this.items = this._items.filter((item) => item.toLocaleLowerCase().includes(searchTerm));
  }
}
