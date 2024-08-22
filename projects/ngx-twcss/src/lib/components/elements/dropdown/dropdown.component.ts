import { Component, Input, OnInit, inject } from '@angular/core';
import { DROPDOWN_CONFIG, DropdownConfig } from './dropdown.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { trigger, style, animate, transition } from '@angular/animations';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  host: {
    '[@openClose]': '',
    '[class]': 'class'
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
  private config = inject(DROPDOWN_CONFIG);
  private _class!: string;

  @Input() class!: string;

  ngOnInit(): void {
    this._class = this.class;
    this.setConfig(this.config);
  }

  setConfig(config: Partial<DropdownConfig> = DropdownConfig): void {
    this.class = mergeClassNames(toClassNames(config), this._class);
  }
}
