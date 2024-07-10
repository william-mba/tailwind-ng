import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseConfig } from "../../configs/base.config";
import { BaseComponent } from '../base.component';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';

/**Badge config key*/
export const BadgeConfigKey = 'BadgeConfigKey';
/**Badge config*/
export type BadgeConfig = Partial<BaseConfig>;
export const BadgeConfig: BadgeConfig = {
  display: {
    gap: 'gap-1',
    type: 'inline-flex',
    placeContent: 'place-content-center',
    placeItems: 'place-items-center'
  },
  padding: {
    x: 'px-2',
    y: 'py-0.5'
  },
  theme: {
    bgColor: 'bg-indigo-600',
    textColor: 'text-indigo-600'
  },
  fontWeight: 'font-medium',
  borderRadius: 'rounded-full'
}

/**Badge component*/
@Component({
  standalone: true,
  selector: 'tw-badge',
  template: '<span [className]="style"><ng-content></ng-content></span>'
})
export class Badge extends BaseComponent<BadgeConfig> implements OnInit {
  /* Set here so it cannot be override from the className.*/
  private readonly staticConfig: Partial<BaseConfig> = {
    fontSize: 'text-xs',
    borderWidth: 'ring-inset',
    textAlign: 'text-center',
    theme: {
      bgOpacity: 'bg-opacity-5',
      borderOpacity: 'ring-opacity-30',
      dark: {
        bgOpacity: 'dark:bg-opacity-10',
        borderOpacity: 'dark:ring-opacity-20'
      }
    }
  }

  @Input() override className!: string;

  ngOnInit(): void {
    this.className += ` ${toClassName(this.staticConfig)}`;
    this.initConfig(BadgeConfigKey, BadgeConfig);
  }
}

@Directive({
  standalone: true,
  selector: 'tw-badge-action, [tw-badge-action], [twBadgeAction]'
})
export class BadgeAction implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const base = "hover:bg-inherit hover:bg-opacity-20 size-4";
    const style = resolveClassName(base, this.className);
    this.el.nativeElement.className = style;
  }
}
