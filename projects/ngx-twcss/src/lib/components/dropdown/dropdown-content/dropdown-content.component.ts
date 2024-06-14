import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { DropdownContentConfig, DropdownContentConfigKey } from './dropdown-content.config';

/**Dropdown content
 * @package ngx-twcss
 */

@Component({
  selector: 'nxt-dropdown-content',
  standalone: true,
  templateUrl: './dropdown-content.component.html',
})
export class DropdownContent extends BaseComponent<DropdownContentConfig> implements OnInit {
  @Input() override className!: string;
  @Input() override style!: string[];

  ngOnInit(): void {
    this.initConfig(DropdownContentConfigKey, DropdownContentConfig);
  }
}
