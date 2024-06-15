import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { DropdownItemConfig, DropdownItemConfigKey } from './dropdown-item.config';
import { DropdownConfig } from '../dropdown.config';

/**Dropdown item
 * @package ngx-twcss
 */
@Component({
  selector: 'nxt-dropdown-item',
  standalone: true,
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItem extends BaseComponent<DropdownItemConfig> implements OnInit {
  @Input() override config!: DropdownItemConfig;
  @Input() override size: SizeVariant = 'md';
  @Input() override className!: string;
  @Input() override style!: string[];

  ngOnInit(): void {
    this.initConfig(DropdownItemConfigKey);
  }
}
