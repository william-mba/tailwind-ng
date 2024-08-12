import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown.component';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'tw-comboboxe-item',
  standalone: true,
  host: {
    '(click)': 'select.emit(value)',
    '[class]': 'stateClasses',
    class: 'flex items-center hover:text-white hover:bg-blue-600 h-fit px-4 py-2 gap-1 hover:font-extrabold cursor-pointer relative'
  },
  template: `
  @if(canDisplayOn('left')) {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5 h-full absolute inset-y-0 left-3">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
    </svg>
  }
  <span>{{ value }}</span>
  @if(canDisplayOn('right')) {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
    </svg>
  }
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
  imports: [Dropdown, Button, FormsModule, ComboboxeItem, NgFor, NgIf],
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
  @Input() label: string = '';
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
