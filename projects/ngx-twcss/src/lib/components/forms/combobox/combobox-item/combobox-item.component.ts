import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Icon } from '../../../elements/icon/icon.directive';
import { COMBOBOX_ITEM_CONFIG, ComboboxItemConfig } from './combobox-item.config';
import { mergeClassNames, toClassNames } from '../../../../core/helpers/config.helper';

/**
 * Combobox item interface
 */
export interface IComboboxItem {
  id: string;
  value: string;
  selected: boolean;
  select(): void;
  scrollIntoView(): void;
  onSelect: EventEmitter<IComboboxItem>;
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
  @Output() onSelect: EventEmitter<IComboboxItem> = new EventEmitter();

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

@Component({
  selector: 'tw-combobox-item',
  standalone: true,
  imports: [Icon, NgIf, NgTemplateOutlet],
  host: {
    '[class]': 'resolveStateStyle()',
  },
  template: `
  <ng-container [ngTemplateOutlet]="templateRef || default"></ng-container>
  <ng-template #default>
    <tw-icon *ngIf="canDisplayOn('left')" source="heroicons" name="check" class="my-auto absolute inset-y-0 left-3"/>
    <span>{{ value }}</span>
    <tw-icon *ngIf="canDisplayOn('right')" source="heroicons" name="check"/>
  </ng-template>
  `,
  providers: [
    {
      provide: ComboboxItemBase,
      useExisting: ComboboxItem
    }
  ]
})
export class ComboboxItem extends ComboboxItemBase implements OnInit {
  private config: ComboboxItemConfig = inject(COMBOBOX_ITEM_CONFIG);

  @Input() iconSlot: 'left' | 'right' = 'right';
  @Input() templateRef!: TemplateRef<ComboboxItem>;
  @Input() stateSlye!: Record<string, boolean>;

  constructor(element: ElementRef<HTMLElement>) {
    super(element);
  }

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config), this.class);
  }

  protected resolveStateStyle(): Record<string, boolean> {
    return this.stateSlye || {
      'pl-10': this.iconSlot === 'left',
      'font-bold': this.selected === true,
      'text-white': this.selected === true,
      'bg-blue-600': this.selected === true,
      'justify-between': this.iconSlot === 'right'
    }
  }

  canDisplayOn(side: 'left' | 'right'): boolean {
    return this.iconSlot === side && this.selected;
  }
}
