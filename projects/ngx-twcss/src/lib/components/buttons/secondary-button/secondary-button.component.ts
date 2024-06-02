import { Component, Input } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { SecondaryButtonConfigKey, SecondaryButtonConfig } from './secondary-button.config';

/**Secondary button component */
@Component({
  selector: 'nxt-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButton extends BaseComponent<SecondaryButtonConfig> {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';
  @Input() override style: string[] = [];

  ngOnInit(): void {
    this.initConfig(SecondaryButtonConfigKey, SecondaryButtonConfig);
  }
}
