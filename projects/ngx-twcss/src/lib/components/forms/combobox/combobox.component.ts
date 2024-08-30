import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Dropdown } from '../../elements/dropdown/dropdown.component';
import { Button } from '../../elements/button/button.component';
import { Icon } from '../../elements/icon/icon.directive';
import { COMBOBOX_CONFIG, ComboboxConfig } from './combobox.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { IComboboxItem } from './combobox-item/combobox-item.component';

/**
 * Combobox interface
 */
export interface ICombobox {
  label: string;
  inputValue: string;
  inputClass: string;
  opened: boolean;
  inputMinLength: number;
  width: 'w-64' | 'w-72' | 'w-80' | 'w-96';
  onChange: EventEmitter<string>;
  onReset: EventEmitter<void>;
  onToggle: EventEmitter<boolean>;
  close(): void;
  open(): void;
  select(item: IComboboxItem): void;
  checkSelection(value: string): boolean;
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
export class Combobox implements OnInit, ICombobox {
  private config: ComboboxConfig = inject(COMBOBOX_CONFIG);
  private selectedItem!: IComboboxItem;
  private inputValueIsTooShort = (): boolean => this.inputMinLength > this.inputValue.trim().length;

  @ViewChild('comboboxInput', { static: true, read: ElementRef })
  private input!: ElementRef<HTMLInputElement>;

  protected id: string = crypto.randomUUID();
  protected canDisplayResetIcon = (): boolean => this.opened && this.inputValue.length > 0;

  @Input() label!: string;
  @Input() inputValue: string = '';
  @Input() inputClass!: string;
  @Input() opened: boolean = false;
  @Input() inputMinLength: number = 2;
  @Input() width: 'w-64' | 'w-72' | 'w-80' | 'w-96' = 'w-64';
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Output() onReset: EventEmitter<void> = new EventEmitter();
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.inputClass = mergeClassNames(toClassNames(this.config), `${this.inputClass} ${this.width}`);
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
    this.onToggle.emit(this.opened);
  }

  protected reset(): void {
    this.inputValue = '';
    this.input.nativeElement.focus();
    this.onReset.emit();
  }

  close(): void {
    this.opened = false;
  }

  open(): void {
    this.opened = true;
  }

  select(item: IComboboxItem): void {
    this.close();
    this.selectedItem = item;
    this.inputValue = item.value;
  }

  checkSelection(value: string): boolean {
    return this.inputValue.trim() === value;
  }
}
