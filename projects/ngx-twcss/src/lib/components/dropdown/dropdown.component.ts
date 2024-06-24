import { Component, Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';
import { BaseComponent, SizeVariant } from '../base.component';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { toClassName } from '../../core/helpers/config.helper';
import { NgIf } from '@angular/common';
import { SizeConfig } from '../../configs/size.config';
import { ConfigService } from '../../configs/config.service';
import { trigger, style, animate, transition } from '@angular/animations';

/**Dropdown item element
 * @package ngx-twcss
*/
@Directive({
  selector: 'nxt-dropdown-item',
  standalone: true
})
export class DropdownItem {
  private configService = inject(ConfigService<DropdownConfig>);
  @Input() size: SizeVariant = 'md';

  constructor(el: ElementRef) {
    this.configService.get(DropdownConfigKey).subscribe((cfg) => {
      el.nativeElement.className = toClassName([cfg.item, SizeConfig[this.size]]);
    });
  }
}

/**Dropdown element
 * @package ngx-twcss
*/
@Component({
  selector: 'nxt-dropdown',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dropdown.component.html',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ]),
      transition(':leave', [
        animate('75ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.9)'
        }))
      ])
    ])
  ]
})
export class Dropdown extends BaseComponent<DropdownConfig> implements OnInit {
  protected contentStyle!: string;

  @Input() override className!: string;
  @Input() override size: SizeVariant = 'md';

  @Input() isOpen: boolean = false;
  @Input() contentClassName: string = '';
  @Input() contentPosition: string = 'top-8 right-0';

  ngOnInit(): void {
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((cfg) => {
        this.style = this.resolveStyle(toClassName([cfg.container, SizeConfig[this.size]]), this.className);
        this.contentStyle = this.resolveStyle(toClassName(cfg.content), this.contentClassName);
      });
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }
}
