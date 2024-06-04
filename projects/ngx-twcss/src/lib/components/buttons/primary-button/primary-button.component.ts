import { Component, Input } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { PrimaryButtonConfigKey, PrimaryButtonConfig } from './primary-button.config';

/**Primary button element */
@Component({
  standalone: true,
  selector: 'nxt-primary-button',
  templateUrl: './primary-button.component.html'
})
export class PrimaryButton extends BaseComponent<PrimaryButtonConfig> {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';
  @Input() override style: string[] = [];

  ngOnInit(): void {
    this.initConfig(PrimaryButtonConfigKey, PrimaryButtonConfig);
  }
}
