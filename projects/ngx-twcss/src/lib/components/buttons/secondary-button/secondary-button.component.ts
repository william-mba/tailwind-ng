import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { SecondaryButtonConfigKey, SecondaryButtonConfig } from './secondary-button.config';

/**Secondary button element
 * @package ngx-twcss
*/
@Component({
  selector: 'tw-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButton extends BaseComponent<SecondaryButtonConfig> implements OnInit {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';

  ngOnInit(): void {
    this.initConfig(SecondaryButtonConfigKey, SecondaryButtonConfig);
  }
}
