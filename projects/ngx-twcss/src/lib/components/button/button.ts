import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ButtonConfig, ButtonConfigKey, ButtonSize, ButtonVariant, IconSize, IconSizeConfig } from './button.config';
import { ConfigService } from '../../core/services/config.service';

/** Button element */
@Directive({
  selector: 'tw-button',
  standalone: true
})
export class Button implements OnInit {
  private _config = inject(ConfigService<ButtonConfig>);

  @Input() style!: string;
  @Input() className!: string;
  @Input() fab: boolean = false;
  @Input() size: ButtonSize = 'md';
  @Input() variant: ButtonVariant = 'primary';

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.initConfig();
  }

  initConfig(): void {
    if (this.style) {
      this.el.nativeElement.className = this.style;
      return;
    }

    if (this.fab === true) {
      this.className = resolveClassName('shadow-lg shadow-black/30', this.className);
    }
    this._config.set(ButtonConfigKey, ButtonConfig)
      .get(ButtonConfigKey).subscribe((cfg) => {
        let style = toClassName({ variant: cfg[this.variant], size: cfg.size[this.size] });
        this.el.nativeElement.className = resolveClassName(style, this.className);
      });
  }
}

/** Icon button */
@Directive({
  selector: '[tw-icon]',
  standalone: true,
})
export class Icon implements OnInit {
  @Input() size: IconSize = 'md';

  constructor(public el: Button) { }

  ngOnInit(): void {
    let base = toClassName(IconSizeConfig[this.size]!);
    this.el.className = resolveClassName(base, this.el.className);
    this.el.initConfig();
  }
}
