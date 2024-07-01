import { Component, Input, OnInit, inject } from '@angular/core';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ButtonConfig, ButtonConfigKey, ButtonVariant } from './button.config';
import { SizeConfig } from '../../configs/size.config';
import { ConfigService } from '../../core/services/config.service';
import { Size } from '../../core/types/size';

/**Button component*/
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
