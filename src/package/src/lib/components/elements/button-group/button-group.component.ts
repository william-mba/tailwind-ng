import { Component, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { BUTTON_GROUP_CONFIG, ButtonGroupConfig } from './button-group.config';
import { ButtonGroup } from './button-group';

@Component({
  selector: 'tw-button-group, [tw-button-group]',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: `<ng-content></ng-content>`
})
export class ButtonGroupComponent implements OnInit, ButtonGroup {
  private readonly config: ButtonGroupConfig = inject(BUTTON_GROUP_CONFIG);

  @Input()
  public class!: string;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<ButtonGroupConfig>): void {
    this.class = mergeClassNames(toClassNames(config), this.class);
  }
}
