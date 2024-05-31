import { Component, Input } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { SoftButtonConfig, SoftButtonConfigKey } from './soft-button.config';

@Component({
  selector: 'nxt-soft-button',
  standalone: true,
  templateUrl: './soft-button.component.html',
})
export class SoftButtonComponent extends BaseComponent<SoftButtonConfig> {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';
  @Input() override style: string[] = [];

  ngOnInit(): void {
    this.initConfig(SoftButtonConfigKey, SoftButtonConfig);
  }
}
