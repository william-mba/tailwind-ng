import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../base.component';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ConfigService } from '../../core/services/config.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Size } from '../../core/types/size';
import { NgIf } from '@angular/common';

/** Dropdown item component */
@Component({
  selector: 'tw-dropdown-item',
  standalone: true,
  template: `<div [className]="style"><ng-content></ng-content></div>`
})
export class DropdownItem implements OnInit {
  private _config = inject(ConfigService<DropdownConfig>);
  protected style!: string;

  @Input() className!: string;

  ngOnInit(): void {
    this._config.get(DropdownConfigKey).subscribe((conf) => {
      const base = toClassName(conf.item);
      this.style = resolveClassName(base, this.className);
    });
  }
}

/** Dropdown component */
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  imports: [NgIf],
  host: {
    class: 'relative'
  },
  template: `<ng-content></ng-content>
    <div @dropdownAnimation *ngIf="open" [className]="style">
      <ng-content select="tw-dropdown-item"></ng-content>
    </div>`,
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0.9) translateY(-1rem)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scaleY(1) translateY(0px)'
        }))
      ]),
      transition(':leave', [
        animate('75ms ease-in', style({
          opacity: 0,
          transform: 'scaleY(0.9) translateY(-1rem)'
        }))
      ])
    ])
  ]
})
export class Dropdown extends BaseComponent<DropdownConfig> implements OnInit {
  @Input() override className!: string;
  @Input() override size: Size = 'md';

  @Input() open: boolean = false;

  ngOnInit(): void {
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((cfg) => {
        this.style = resolveClassName(toClassName(cfg.container), this.className);
      });
  }
}
