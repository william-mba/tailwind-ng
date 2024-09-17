import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { DROPDOWN_CONFIG, DropdownConfig } from './dropdown.config';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Dropdown } from './dropdown';

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
      state('opened', style({
        opacity: 1,
        visibility: 'visible',
        transform: 'scaleY(1)',
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden',
        transform: 'scaleY(0.95)',
      })),
      transition('closed => opened', [animate('100ms ease-out')]),
      transition('opened => closed', [animate('75ms ease-in')])
    ])
  ]
})
export class DropdownComponent implements Dropdown, OnInit {
  @Input()
  public class!: string;
  @Input()
  public opened: boolean = false;
  @Output('toggle')
  public onToggle: EventEmitter<boolean> = new EventEmitter();

  private readonly _config = inject(DROPDOWN_CONFIG);
  private _class!: string;

  public get config(): DropdownConfig {
    return this._config;
  }

  ngOnInit(): void {
    this.initClassName();
  }

  public toggle(): void {
    this.opened = !this.opened;
    this.onToggle.emit(this.opened);
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
  }

  public setConfig(config: Partial<DropdownConfig>): void {
    this.class = mergeClassNames(this._class, toClassNames(config));
  }

  private initClassName() {
    this._class = mergeClassNames(toClassNames(this._config), this.class);
    this.class = this._class;
  }

}
