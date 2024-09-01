import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { IconDirective } from '../../../elements/icon/icon.directive';
import { COMBOBOX_ITEM_CONFIG, ComboboxItemConfig } from './combobox-item.config';
import { mergeClassNames, toClassNames } from '../../../../core/helpers/config.helper';
import { BaseComboboxItemComponent } from './combobox-item.base';
import { ComboboxItem } from './combobox-item';

@Component({
  selector: 'tw-combobox-item',
  standalone: true,
  imports: [IconDirective, NgIf, NgTemplateOutlet],
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
      provide: BaseComboboxItemComponent,
      useExisting: ComboboxItemComponent
    }
  ]
})
export class ComboboxItemComponent extends BaseComboboxItemComponent implements OnInit {
  private readonly config: ComboboxItemConfig = inject(COMBOBOX_ITEM_CONFIG);

  @Input()
  public iconSlot: 'left' | 'right' = 'right';
  @Input()
  public templateRef!: TemplateRef<ComboboxItem>;
  @Input()
  public stateSlye!: Record<string, boolean>;

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

  protected canDisplayOn(side: 'left' | 'right'): boolean {
    return this.iconSlot === side && this.selected;
  }
}
