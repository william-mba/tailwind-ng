import { Component, inject, Input, OnInit } from '@angular/core';
import { ConfigsService } from '../../../common/configs/configs.service';
import { SizeConfig } from '../../../common/configs/size.config';
import { toClassName } from '../../../common/helpers/object.helper';
import { BaseComponent, SizeVariant } from '../../base.component';

@Component({
  selector: 'nxt-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButtonComponent extends BaseComponent implements OnInit {
  private config = inject(ConfigsService).secondaryButtonConfig();
  @Input() override size: SizeVariant = 'sm';
  @Input() override className: string = '';

  ngOnInit(): void {
    this.config.subscribe((s) => {
      this._style = [];
      this.addClass(toClassName([s, SizeConfig[this.size], this.className]));
    });
  }
}
