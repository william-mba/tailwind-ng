import { Component, inject, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { toClassName } from '../../../common/helpers/object.helper';
import { SizeSettings } from '../../../common/settings/size.settings';
import { SettingsManager } from '../../../common/settings/settings-manager';

@Component({
  standalone: true,
  selector: 'nxt-primary-button',
  templateUrl: './primary-button.component.html'
})

export class PrimaryButtonComponent extends BaseComponent implements OnInit {
  @Input() override size: SizeVariant = 'sm';
  @Input() settings = inject(SettingsManager).primaryButtonSettings();

  ngOnInit(): void {
    this.settings.subscribe((s) => {
      this.style = [];
      this.addClass(toClassName([
        this.className, s, SizeSettings[this.size]
      ]));
    });
  }
}
