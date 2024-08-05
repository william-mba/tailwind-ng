import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown.component';
import { Button, Icon } from '../button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tw-comboboxe-item',
  standalone: true,
  host: {
    class: 'flex items-center hover:text-white hover:bg-blue-600 h-fit px-4 py-2 gap-1 hover:font-extrabold cursor-pointer'
  },
  template: `
  @if(selected && iconPosition === 'left') {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
    </svg>
  }
  <span>{{ value }}</span>
  @if(selected && iconPosition === 'right') {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
    </svg>
  }
  `
})
export class ComboboxeItem implements OnInit {
  @Input() value!: string;
  @Input() iconPosition!: 'left' | 'right';
  @Output() onSelect = new EventEmitter<string>();

  // @HostBinding('class.text-white')
  // @HostBinding('class.bg-blue-600')
  @HostBinding('class.font-semibold')
  @Input() selected = false;

  @HostBinding('class.justify-between') get justifyBetween() {
    return this.iconPosition === 'right';
  }

  @HostBinding('class.pl-10') get paddingLeft() {
    return !this.justifyBetween && !this.selected;
  }

  ngOnInit(): void {
    if (this.selected) {
      this.onSelect.emit(this.value);
    }
  }

  @HostListener('click') onClick() {
    this.onSelect.emit(this.value);
  }
}

@Component({
  selector: 'tw-comboboxe',
  standalone: true,
  imports: [Dropdown, Button, Icon, FormsModule, ComboboxeItem],
  host: {
    class: 'relative h-max'
  },
  templateUrl: './comboboxe.component.html'
})
export class Comboboxe implements OnInit {
  @Input() open: boolean = false;
  @Input() sort: boolean = false;
  @Input() items: string[] = [];
  @Input() label: string = '';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  private _items!: string[];
  protected inputValue!: string;
  protected id: string = crypto.randomUUID();

  @ViewChild('textInput', { static: true, read: ElementRef }) input!: ElementRef<HTMLInputElement>;
  @ViewChildren(ComboboxeItem, { read: ElementRef }) comboboxItems!: ElementRef<HTMLElement>[];

  @HostListener('click', ['$event.target']) onClick(element: HTMLElement) {
    // Set the focus to input if an item is clicked
    if (element.textContent === this.inputValue) {
      this.input.nativeElement.focus();
    };

    // Scroll to the selected item if the dropdown is open
    if (this.open) {
      this.scrollToSelectedItem();
    }
  }

  ngOnInit(): void {
    this._items = this.sort ? this.items.sort() : this.items;
    this.inputValue = this._items[0];
  }

  toggle = () => this.open = !this.open;

  resetList() {
    this.items = this._items;
    this.scrollToSelectedItem();
  };

  private scrollToSelectedItem() {
    const item = this.comboboxItems.find((item) => this.isSelected(item.nativeElement.textContent || ''));
    if (!item) return;

    item.nativeElement.scrollIntoView({ behavior: "instant", block: "nearest" });
  }

  isSelected = (item: string) => this.inputValue.trim() === item.trim();

  selectValue(value: string) {
    this.open = false;
    this.inputValue = value;
    this.onSelect.emit(value);
  }

  filterItems(inputValue: string) {
    this.open = true;

    if (!inputValue.trim()) return;

    const searchTerm = inputValue.toLocaleLowerCase().trim();
    this.items = this._items.filter((item) => item.toLocaleLowerCase().includes(searchTerm));
  }
}
