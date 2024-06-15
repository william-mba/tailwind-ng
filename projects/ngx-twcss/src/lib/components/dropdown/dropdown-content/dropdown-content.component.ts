import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { DropdownContentConfig, DropdownContentConfigKey } from './dropdown-content.config';
import { DropdownItem } from '../dropdown-item/dropdown-item.component';
import { CommonModule } from '@angular/common';
import { DropdownConfig } from '../dropdown.config';
import { DropdownItemConfig } from '../dropdown-item/dropdown-item.config';

/**Dropdown content
 * @package ngx-twcss
 */
@Component({
  selector: 'nxt-dropdown-content',
  standalone: true,
  imports: [CommonModule, DropdownItem],
  templateUrl: './dropdown-content.component.html',
})
export class DropdownContent extends BaseComponent<DropdownContentConfig> implements OnInit {
  @Input() override config!: DropdownContentConfig;
  @Input() childConfig!: DropdownItemConfig;
  @Input() override className!: string;
  @Input() override style!: string[];
  @Input() items!: string[];

  ngOnInit(): void {
    this.initConfig(DropdownContentConfigKey);
  }
}
