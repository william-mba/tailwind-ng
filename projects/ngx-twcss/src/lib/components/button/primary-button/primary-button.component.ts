import { Component, Input } from '@angular/core';
import { PrimaryButtonSettings } from './primary-button.settings';
import { BaseComponent, SizeVariant } from '../../base.component';
import { toClassName } from '../../../common/helpers/object.helper';
import { SizeSettings } from '../../../common/settings/size.settings';

@Component({
  selector: 'nxt-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html'
})

export class PrimaryButtonComponent extends BaseComponent {
  @Input() override size: SizeVariant = 'sm';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() settings: PrimaryButtonSettings = PrimaryButtonSettings;

  constructor() {
    super();
    this.setup();
  }

  override setup(): void {
    this.addClass(toClassName([
      this.className, this.settings, SizeSettings[this.size]
    ]));
  }
}
