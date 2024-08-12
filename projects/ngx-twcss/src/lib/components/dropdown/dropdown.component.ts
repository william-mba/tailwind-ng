import { Component, Input, OnInit, inject } from '@angular/core';
import { DropdownConfig, DropdownConfigKey } from './dropdown.config';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { ConfigService } from '../../core/services/config.service';
import { trigger, style, animate, transition } from '@angular/animations';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  host: {
    '[@openClose]': '',
    '[class]': 'config'
  },
  template: `<ng-content></ng-content>`,
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(.95)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ]),
      transition(':leave', [
        animate('75ms ease-in', style({
          opacity: 0,
          transform: 'scale(.95)'
        }))
      ])
    ])
  ]
})
export class Dropdown implements OnInit {
  private config$ = inject(ConfigService).get<DropdownConfig>(DropdownConfigKey);
  private _class!: string;

  @Input() class!: string;
  @Input() config!: string;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;
    this.config$.subscribe((conf) => {
      this.setConfig(conf);
    });
  }

  setConfig(config: Partial<DropdownConfig> = DropdownConfig): void {
    this.config = mergeClassNames(toClassNames(config), this._class);
  }
}
