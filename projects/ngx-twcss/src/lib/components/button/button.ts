import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { ButtonConfig, ButtonConfigKey, ButtonSize, ButtonVariant, IconSizeConfig } from './button.config';
import { ConfigService } from '../../core/services/config.service';

/** Button element */
@Component({
  selector: 'tw-button',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'config'
  }
})
export class Button implements OnInit {
  private config$ = inject(ConfigService).get<ButtonConfig>(ButtonConfigKey);
  private _class!: string;

  @Input() config!: string;
  @Input() class!: string;
  @Input() fab: boolean = false;
  @Input() icon: boolean = false;
  @Input() size: ButtonSize = 'md';
  @Input() variant: ButtonVariant = 'primary';
  @Input() classMatch: 'first' | 'last' = 'first';

  ngOnInit(): void {
    this.initConfig();
  }

  initConfig(): void {
    if (this.config) return;

    if (this.fab) {
      this.class = mergeClassNames('shadow-lg shadow-black/30', this.class);
    }
    this._class = this.class;

    this.config$.subscribe((cfg) => {
      this.setConfig(toClassNames({ ...cfg[this.variant], ...cfg.size[this.size] }));
    });
  }

  private setConfig(value: string): void {
    if (this.icon) {
      this._class = mergeClassNames(this._class, toClassNames({ ...IconSizeConfig[this.size] }));
    }
    this.config = mergeClassNames(value, this._class, this.classMatch);
  }
}

