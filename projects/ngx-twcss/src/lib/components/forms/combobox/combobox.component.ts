import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Dropdown } from '../../elements/dropdown/dropdown.component';
import { Button } from '../../elements/button/button.component';
import { Icon } from '../../elements/icon/icon.directive';
import { COMBOBOX_CONFIG, ComboboxConfig } from './combobox.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';

export interface IComboboxItem {
  id: string;
  value: string;
  selected?: boolean;
  scrollIntoView(): void;
}

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
export abstract class ComboboxItemBase implements IComboboxItem {
  @Input() value!: string;
  @Input() class!: string;
  @Input() selected: boolean = false;
  @Input() id: string = crypto.randomUUID();
  @Output() onSelect: EventEmitter<ComboboxItemBase> = new EventEmitter();

  constructor(private element: ElementRef<HTMLElement>) { }

  protected select(): void {
    this.selected = true;
    this.onSelect.emit(this);
  }

  scrollIntoView(): void {
    setTimeout(() => {
      this.element.nativeElement.scrollIntoView({ behavior: 'instant', block: 'nearest' }), 100
    });
  }
}

@Component({
  selector: 'tw-combobox',
  standalone: true,
  imports: [Dropdown, Button, Icon, FormsModule, NgIf],
  host: {
    class: 'relative h-max',
  },
  templateUrl: './combobox.component.html',
})
export class Combobox implements OnInit {
  private config: ComboboxConfig = inject(COMBOBOX_CONFIG);
  private selectedItem!: IComboboxItem;
  private inputValueIsTooShort = (): boolean => this.itemMinLength > this.inputValue.trim().length;

  @ViewChild('comboboxInput', { static: true, read: ElementRef })
  private input!: ElementRef<HTMLInputElement>;

  protected id: string = crypto.randomUUID();
  protected canDisplayResetIcon = (): boolean => this.opened && this.inputValue.length > 0;

  @Input() label!: string;
  @Input() inputValue: string = '';
  @Input() inputClass!: string;
  @Input() opened: boolean = false;
  @Input() itemMinLength: number = 2;
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Output() onReset: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.inputClass = mergeClassNames(toClassNames(this.config), this.inputClass);
  }

  select(item: IComboboxItem): void {
    this.opened = false;
    this.selectedItem = item;
    this.inputValue = item.value;
  }

  protected handleChange(value: string): void {
    this.opened = true;
    if (this.inputValueIsTooShort()) return;
    this.onChange.emit(value.trim());
  }

  protected toggle(): void {
    this.opened = !this.opened;
    if (this.opened && this.selectedItem) {
      this.selectedItem.scrollIntoView();
    }
  }

  protected reset(): void {
    this.inputValue = '';
    this.input.nativeElement.focus();
    this.onReset.emit();
  }
}
