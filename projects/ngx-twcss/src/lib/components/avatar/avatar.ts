import { Component, Input, OnInit } from '@angular/core';
import { StyleConfig } from '../../core/types/style.config';
import { toClassNames, mergeClassNames } from '../../core/helpers/config.helper';

/**Avatar element*/
@Component({
  selector: 'tw-avatar, [tw-avatar]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'config'
  }
})
export class Avatar implements OnInit {
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this.setConfig();
  }

  public setConfig(config: Partial<AvatarConfig> = AvatarConfig): void {
    this.config = mergeClassNames(toClassNames(config), this.class);
  }
}

export type AvatarConfig = Partial<StyleConfig>;

export const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}
