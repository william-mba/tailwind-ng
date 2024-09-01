import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconDirective } from '../../elements/icon/icon.directive';
import { COMBOBOX_CONFIG, ComboboxConfig } from './combobox.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { ComboboxItem } from './combobox-item/combobox-item';
import { Combobox } from './combobox';

@Component({
  selector: 'tw-combobox',
  standalone: true,
  imports: [DropdownComponent, ButtonComponent, IconDirective, FormsModule, NgIf],
  host: {
    class: 'relative h-max',
  },
  templateUrl: './combobox.component.html',
})
export class ComboboxComponent implements OnInit, Combobox {
  private readonly config: ComboboxConfig = inject(COMBOBOX_CONFIG);
  private selectedItem!: ComboboxItem;
  private inputValueIsTooShort = (): boolean => this.inputMinLength > this.inputValue.trim().length;

  @ViewChild('comboboxInput', { static: true, read: ElementRef })
  private readonly input!: ElementRef<HTMLInputElement>;

  protected id: string = crypto.randomUUID();
  protected canDisplayResetIcon = (): boolean => this.opened && this.inputValue.length > 0;

  @Input()
  public label!: string;
  @Input()
  public inputValue: string = '';
  @Input()
  public inputClass!: string;
  @Input()
  public opened: boolean = false;
  @Input()
  public inputMinLength: number = 2;
  @Input()
  public width: 'w-64' | 'w-72' | 'w-80' | 'w-96' = 'w-64';
  @Output()
  public onChange: EventEmitter<string> = new EventEmitter();
  @Output()
  public onReset: EventEmitter<void> = new EventEmitter();
  @Output()
  public onToggle: EventEmitter<boolean> = new EventEmitter();

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

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public select(item: ComboboxItem): void {
    this.selectedItem = item;
    this.inputValue = item.value;
  }

  public checkSelection(value: string): boolean {
    return this.inputValue.trim() === value;
  }
}
