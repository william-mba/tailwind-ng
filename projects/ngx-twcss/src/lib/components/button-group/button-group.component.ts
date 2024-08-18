import { Component, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { StyleConfig } from '../../core/types/style.config';

/** Button group config key */
export const ButtonGroupConfigKey = 'ButtonGroupConfigKey';

/** Button group config */
export type ButtonGroupConfig = Partial<StyleConfig>;
export const ButtonGroupConfig: ButtonGroupConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-stretch'
  },
  filters: {
    backdrop: 'backdrop-blur'
  }
}

/** Button group */
@Component({
  selector: 'tw-button-group, [tw-button-group]',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: `<ng-content></ng-content>`
})
export class ButtonGroup implements OnInit {
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this.setConfig();
  }

  setConfig(config: Partial<ButtonGroupConfig> = ButtonGroupConfig): void {
    this.config = mergeClassNames(toClassNames(config), this.class);
  }
}
