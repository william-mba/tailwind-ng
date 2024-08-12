import { Directive, Input, OnInit } from '@angular/core';
import { Config } from "../../core/types/config";
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';

/**Badge config key*/
export const BadgeConfigKey = 'BadgeConfigKey';
/**Badge config*/
export type BadgeConfig = Partial<Config>;
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
  selector: 'tw-badge, [tw-badge]',
  host: {
    '[class]': 'config'
  }
})
export class Badge implements OnInit {
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this.config = mergeClassNames(toClassNames(BadgeConfig), this.class);
  }
}

@Directive({
  standalone: true,
  selector: 'tw-badge-action, [tw-badge-action]',
  host: {
    '[class]': 'config'
  }
})
export class BadgeAction implements OnInit {
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this.config = mergeClassNames("hover:bg-inherit hover:bg-opacity-20 size-3", this.class);
  }
}
