import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../base.component';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { toClassName } from '../../core/helpers/object.helper';
import { CommonModule } from '@angular/common';
import { SizeConfig } from '../../configs/size.config';

@Component({
  selector: 'nxt-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html'
})
export class Dropdown extends BaseComponent<DropdownConfig> implements OnInit {
  protected contentStyle!: string;
  protected itemtStyle!: string;

  @Input() override size: SizeVariant = 'md';
  @Input() override className!: string;
  @Input() override style!: string[];

  @Input() isOpen: boolean = false;
  @Input() items!: any[];

  ngOnInit(): void {
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((cfg) => {
        this.style = [];
        this.addClass(toClassName([cfg.container, SizeConfig[this.size]]));
        this.contentStyle = toClassName(cfg.content);
        this.itemtStyle = toClassName([cfg.item, SizeConfig[this.size]]);
      });
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.isOpen = this.isOpen === false ? true : false;
  }
}
