import { Component, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { BUTTON_GROUP_CONFIG, ButtonGroupConfig } from './button-group.config';

export interface IButtonGroup {
  class: string;
  setConfig(config: Partial<ButtonGroupConfig>): void;
}

/** Button group */
@Component({
  selector: 'tw-button-group, [tw-button-group]',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: `<ng-content></ng-content>`
})
export class ButtonGroup implements OnInit, IButtonGroup {
  private config: ButtonGroupConfig = inject(BUTTON_GROUP_CONFIG);
  @Input() class!: string;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  setConfig(config: Partial<ButtonGroupConfig>): void {
    this.class = mergeClassNames(toClassNames(config), this.class);
  }
}
