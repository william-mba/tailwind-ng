import { Component, Input, OnInit, inject } from '@angular/core';
import { DROPDOWN_CONFIG, DropdownConfig } from './dropdown.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { DropdownAPI } from './dropdown.api';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  host: {
    '[@toggle]': 'opened ? "opened" : "closed"',
    '[class]': 'class',
    '(click)': 'toggle()'
  },
  template: `<ng-content></ng-content>`,
  animations: [
    trigger('toggle', [
      state('opened', style({ opacity: 1, visibility: 'visible', transform: 'scale(1)' })),
      state('closed', style({ opacity: 0, visibility: 'hidden', transform: 'scale(.95)' })),
      transition('closed => opened', [animate('100ms ease-out')]),
      transition('opened => closed', [animate('75ms ease-in')])
    ])
  ]
})
export class Dropdown implements DropdownAPI, OnInit {
  private config = inject(DROPDOWN_CONFIG);

  @Input() class!: string;
  @Input() opened: boolean = false;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  toggle(): void {
    this.opened = !this.opened;
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  setConfig(config: Partial<DropdownConfig> = DropdownConfig): void {
    this.class = mergeClassNames(toClassNames(config), this.class);
  }
}
