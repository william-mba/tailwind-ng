import { Component, Input } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { SoftButtonConfig, SoftButtonConfigKey } from './soft-button.config';

/**Soft button component */
@Component({
  selector: 'nxt-soft-button',
  standalone: true,
  templateUrl: './soft-button.component.html',
})
export class SoftButton extends BaseComponent<SoftButtonConfig> {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';
  @Input() override style: string[] = [];

  ngOnInit(): void {
    this.initConfig(SoftButtonConfigKey, SoftButtonConfig);
  }
}
