import { Component, inject, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { BADGE_CONFIG, BadgeConfig } from './badge.config';
import { Badge } from './badge';

@Component({
  standalone: true,
  selector: 'tw-badge, [tw-badge]',
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class BadgeComponent implements OnInit, Badge {
  private readonly config: BadgeConfig = inject(BADGE_CONFIG);

  @Input() class!: string;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<BadgeConfig>): void {
    this.class = mergeClassNames(toClassNames(config), this.class);
  }
}
