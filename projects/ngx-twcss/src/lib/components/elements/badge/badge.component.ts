import { Component, Directive, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { BADGE_CONFIG, BadgeConfig } from './badge.config';

export interface IBadge {
  class: string;
  setConfig(config: Partial<BadgeConfig>): void;
}

/**Badge component*/
@Component({
  standalone: true,
  selector: 'tw-badge, [tw-badge]',
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class Badge implements OnInit, IBadge {
  private config: BadgeConfig = inject(BADGE_CONFIG);
  
  @Input() class!: string;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<BadgeConfig>): void {
    this.class = mergeClassNames(toClassNames(config), this.class);
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
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames("hover:bg-inherit hover:bg-opacity-20 size-3 cursor-pointer", this.class);
  }
}
