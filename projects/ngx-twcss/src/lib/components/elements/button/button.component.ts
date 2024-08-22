import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { BUTTON_CONFIG, ButtonConfig, ButtonIconSizeConfig, ButtonSizeOptions, ButtonVariant } from './button.config';

/** Button element */
@Component({
  selector: 'tw-button',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'class'
  }
})
export class Button implements OnInit {
  private config: ButtonConfig = inject(BUTTON_CONFIG);
  private _class!: string;
  @Input() class!: string;
  @Input() fab: boolean = false;
  @Input() icon: boolean = false;
  @Input() size: keyof ButtonSizeOptions = 'md';
  @Input() variant: ButtonVariant = 'primary';
  /**
   * The strategy to use to resolve the class names.
   *  If 'first' the first part of the class name is used as prefix otherwise the last part is used.
   * @default 'first'
   */
  @Input() classMatchStrategy: 'first' | 'last' = 'first';

  ngOnInit(): void {
    this.initConfig();
  }

  initConfig(): void {
    if (this.fab) {
      this.class = mergeClassNames('shadow-lg shadow-black/30', this.class);
    }
    this._class = this.class;

    this.setConfig(toClassNames({ ...this.config[this.variant], ...this.config.size[this.size] }));
  }

  private setConfig(value: string): void {
    if (this.icon) {
      this._class = mergeClassNames(this._class, toClassNames(ButtonIconSizeConfig[this.size]!));
    }
    this.class = mergeClassNames(value, this._class, this.classMatchStrategy);
  }
}

