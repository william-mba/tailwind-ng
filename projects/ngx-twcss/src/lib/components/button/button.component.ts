import { Component, Directive, Input, OnInit, inject } from '@angular/core';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ButtonConfig, ButtonConfigKey, ButtonVariant } from './button.config';
import { SizeConfig } from '../../configs/size.config';
import { ConfigService } from '../../core/services/config.service';
import { Size } from '../../core/types/size';

/** Button element */
@Component({
  selector: 'tw-button',
  standalone: true,
  templateUrl: './button.component.html'
})
export class Button implements OnInit {
  private _config = inject(ConfigService<ButtonConfig>);

  @Input() className!: string;
  @Input() style!: string;
  @Input() size: Size = 'md';
  @Input() variant: ButtonVariant = 'primary';

  ngOnInit(): void {
    if (!this.style) {
      this.initConfig();
    }
  }

  initConfig(): void {
    this._config.set(ButtonConfigKey, ButtonConfig)
      .get(ButtonConfigKey).subscribe((cfg) => {
        let style: string = '';

        style = toClassName(cfg[this.variant]);

        if (this.size) {
          style += ` ${toClassName(SizeConfig[this.size])}`;
        }

        this.style = resolveClassName(style, this.className);
      });
  }
}

/** Floating action button */
@Directive({
  selector: '[tw-fab]',
  standalone: true,
})
export class FAB implements OnInit {
  @Input() className!: string;

  private readonly _default = 'rounded-full p-2 shadow-md';

  constructor(public el: Button) { }

  ngOnInit(): void {
    this.el.className = resolveClassName(this._default, this.className);
    this.el.initConfig();
  }
}

/** Icon button */
@Directive({
  selector: '[tw-icon]',
  standalone: true,
})
export class Icon implements OnInit {
  @Input() className!: string;

  private readonly _default = 'rounded-full p-2';

  constructor(public el: Button) { }

  ngOnInit(): void {
    this.el.className = resolveClassName(this._default, this.className);
    this.el.initConfig();
  }
}
