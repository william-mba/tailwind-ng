import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class ComboboxComponent implements OnInit, Combobox, AfterViewInit {
  private selectedItem!: ComboboxItem;
  private readonly config: ComboboxConfig = inject(COMBOBOX_CONFIG);
  private inputValueIsTooShort = (): boolean => this.inputMinLength > this.value.trim().length;

  @ViewChild('input', { static: true, read: ElementRef })
  private readonly input!: ElementRef<HTMLInputElement>;

  protected id: string = crypto.randomUUID();
  protected canDisplayResetIcon = (): boolean => this.opened && this.value.length > 0;

  @Input() label!: string;
  @Input() value: string = '';
  @Input() inputClass!: string;
  @Input() opened: boolean = false;
  @Input() inputMinLength: number = 2;
  @Input() width: 'w-64' | 'w-72' | 'w-80' | 'w-96' = 'w-64';
  @Output() onReset: EventEmitter<void> = new EventEmitter();
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.inputClass = mergeClassNames(toClassNames(this.config), `${this.inputClass} ${this.width}`);
  }

  ngAfterViewInit(): void {
    this.scrollToSelectedItem();
  }

  change(value: string): void {
    this.open();
    if (this.inputValueIsTooShort()) return;
    this.onChange.emit(value.trim());
  }

  toggle(): void {
    this.opened = !this.opened;
    this.scrollToSelectedItem();
    this.onToggle.emit(this.opened);
  }

  private scrollToSelectedItem() {
    if (this.opened && this.selectedItem) {
      this.scrollIntoView(this.selectedItem);
    }
  }

  reset(): void {
    this.value = '';
    this.input.nativeElement.focus();
    this.onReset.emit();
  }

  close(): void {
    this.opened = false;
  }

  open(): void {
    this.opened = true;
  }

  select(item: ComboboxItem): void {
    this.selectedItem = item;
    this.value = item.value;
  }

  isSelected(item: ComboboxItem): boolean {
    return this.value.trim() === item.value;
  }

  scrollIntoView(item: ComboboxItem): void {
    item.element.scrollIntoView({ behavior: 'instant', block: 'nearest' });
  }
}
