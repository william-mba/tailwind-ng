import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { Icon } from '../../../elements/icon/icon.directive';
import { COMBOBOX_ITEM_CONFIG, ComboboxItemConfig } from './combobox-item.config';
import { mergeClassNames, toClassNames } from '../../../../core/helpers/config.helper';
import { ComboboxItemBase } from '../combobox.component';

@Component({
  selector: 'tw-combobox-item',
  standalone: true,
  imports: [Icon, NgIf, NgTemplateOutlet],
  host: {
    '[class]': 'resolveStateStyle()',
  },
  template: `
  <ng-container [ngTemplateOutlet]="customTemplateRef || defaultTemplateRef"></ng-container>
  <ng-template #defaultTemplateRef>
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

  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() customTemplateRef: TemplateRef<ComboboxItemBase> | null = null;

  constructor(el: ElementRef) {
    super(el);
  }

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config), this.class);
  }

  protected resolveStateStyle(): Record<string, boolean> {
    return {
      'justify-between': this.iconPosition === 'right',
      'pl-10': this.iconPosition === 'left',
      'font-bold': this.selected === true,
    }
  }

  canDisplayOn(side: 'left' | 'right'): boolean {
    return this.iconPosition === side && this.selected;
  }
}
