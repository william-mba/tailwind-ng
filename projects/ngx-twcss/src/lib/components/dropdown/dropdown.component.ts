import { Component, Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';
import { BaseComponent, SizeVariant } from '../base.component';
import { DropdownConfigKey, DropdownConfig } from './dropdown.config';
import { toClassName } from '../../core/helpers/object.helper';
import { CommonModule } from '@angular/common';
import { SizeConfig } from '../../configs/size.config';
import { ConfigService } from '../../configs/config.service';

@Directive({
  selector: '[dropdownItem]',
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

@Component({
  selector: 'nxt-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html'
})
export class Dropdown extends BaseComponent<DropdownConfig> implements OnInit {
  protected contentStyle!: string;

  @Input() override size: SizeVariant = 'md';
  @Input() override className!: string;
  @Input() override style!: string[];

  @Input() isOpen: boolean = false;

  ngOnInit(): void {
    this.initConfig();
  }

  override initConfig(): void {
    this.configService.set(DropdownConfigKey, DropdownConfig)
      .get(DropdownConfigKey).subscribe((cfg) => {
        this.style = [];
        this.addClass(toClassName([cfg.container, SizeConfig[this.size]]));
        this.contentStyle = toClassName(cfg.content);
      });
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.isOpen = this.isOpen === false ? true : false;
  }
}
