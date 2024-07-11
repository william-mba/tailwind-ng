import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseConfig } from "../../configs/base.config";
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';

/**Badge config key*/
export const BadgeConfigKey = 'BadgeConfigKey';
/**Badge config*/
export type BadgeConfig = Partial<BaseConfig>;
export const BadgeConfig: BadgeConfig = {
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
    gap: 'gap-1',
  },
  padding: {
    x: 'px-2',
    y: 'py-1'
  },
  fontSize: 'text-xs',
  fontWeight: 'font-medium'
}

/**Badge component*/
@Directive({
  standalone: true,
  selector: 'tw-badge, [tw-badge]'
})
export class Badge implements OnInit {

  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const base = toClassName(BadgeConfig);
    const style = resolveClassName(base, this.className);
    this.el.nativeElement.className = style;
  }
}

@Directive({
  standalone: true,
  selector: 'tw-badge-action, [tw-badge-action]'
})
export class BadgeAction implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const base = "hover:bg-inherit hover:bg-opacity-20 size-3";
    const style = resolveClassName(base, this.className);
    this.el.nativeElement.className = style;
  }
}
