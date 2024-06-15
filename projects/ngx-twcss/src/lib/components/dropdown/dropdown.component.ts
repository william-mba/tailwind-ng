import { Component, Input, OnInit, inject } from '@angular/core';
import { DropdownContent } from './dropdown-content/dropdown-content.component';
import { BaseComponent, SizeVariant } from '../base.component';
import { DropdownContainerConfig, DropdownContainerConfigKey, DropdownConfig } from './dropdown.config';
import { ConfigService } from '../../configs/config.service';
import { DropdownContentConfig, DropdownContentConfigKey } from './dropdown-content/dropdown-content.config';
import { DropdownItemConfig, DropdownItemConfigKey } from './dropdown-item/dropdown-item.config';

@Component({
  selector: 'nxt-dropdown',
  standalone: true,
  imports: [DropdownContent],
  templateUrl: './dropdown.component.html'
})
export class Dropdown extends BaseComponent<DropdownContainerConfig> implements OnInit {
  @Input() override size: SizeVariant = 'md';
  @Input() override className!: string;
  @Input() override style!: string[];
  @Input() items!: any[];

  private dropdownContentConfigService = inject(ConfigService<DropdownContentConfig>);
  private dropdownItemConfigService = inject(ConfigService<DropdownItemConfig>);
  protected dropdownContentConfig!: DropdownContentConfig;
  protected dropdownItemConfig!: DropdownItemConfig;

  ngOnInit(): void {
    this.initConfig(DropdownContainerConfigKey, DropdownConfig.container);
    this.initDropdownContentConfig();
    this.initDropdownItemConfig();
  }

  private initDropdownItemConfig() {
    this.dropdownItemConfigService.set(DropdownItemConfigKey, DropdownConfig.item)
      .get(DropdownItemConfigKey).subscribe((cfg) => {
        this.dropdownItemConfig = cfg;
      });
  }

  private initDropdownContentConfig() {
    this.dropdownContentConfigService.set(DropdownContentConfigKey, DropdownConfig.content)
      .get(DropdownContentConfigKey).subscribe((cfg) => {
        this.dropdownContentConfig = cfg;
      });
  }
}
