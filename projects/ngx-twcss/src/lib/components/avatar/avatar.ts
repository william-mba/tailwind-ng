import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../core/types/config';
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
    this.config = mergeClassNames(toClassNames(AvatarConfig), this.class);
  }
}

export type AvatarConfig = Partial<Config>;

export const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}
