import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { DropdownContainerConfig, DropdownContainerConfigKey } from './dropdown-container.config';

/**Dropdown container
 * @package ngx-twcss
 */
@Component({
  selector: 'nxt-dropdown-container',
  standalone: true,
  templateUrl: './dropdown-container.component.html',
})
export class DropdownContainer extends BaseComponent<DropdownContainerConfig> implements OnInit {
  @Input() override size: SizeVariant = 'md';
  @Input() override className!: string;
  @Input() override style!: string[];

  ngOnInit(): void {
    this.initConfig(DropdownContainerConfigKey, DropdownContainerConfig);
  }
}
