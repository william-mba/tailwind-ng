import { Component, Input, OnInit, inject } from '@angular/core';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ConfigService } from '../../core/services/config.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgIf } from '@angular/common';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown',
  standalone: true,
  imports: [NgIf],
  host: {
    class: 'relative'
  },
  template: `<div @dropdownAnimation *ngIf="open" [className]="config"><ng-content></ng-content></div>`,
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
export class Dropdown implements OnInit {
  private _configService = inject(ConfigService<DropdownConfig>);
  protected config!: string;

  @Input() className!: string;
  @Input() open: boolean = false;

  ngOnInit(): void {
    this._configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((conf) => {
        this.config = resolveClassName(toClassName(conf), this.className);
      });
  }
}
