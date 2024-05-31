import { Component, Input } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { SecondaryButtonKey, SecondaryButtonConfig } from './secondary-button.config';

@Component({
  selector: 'nxt-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButtonComponent extends BaseComponent<SecondaryButtonConfig> {
  @Input() override size: SizeVariant = 'md';
  @Input() override className: string = '';
  @Input() override style: string[] = [];

  ngOnInit(): void {
    this.initConfig(SecondaryButtonKey, SecondaryButtonConfig);
  }
}
