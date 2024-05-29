import { Component, inject, Input, OnInit } from '@angular/core';
import { BaseComponent, SizeVariant } from '../../base.component';
import { toClassName } from '../../../common/helpers/object.helper';
import { SizeConfig } from '../../../common/configs/size.config';
import { ConfigsService } from '../../../common/configs/configs.service';

@Component({
  standalone: true,
  selector: 'nxt-primary-button',
  templateUrl: './primary-button.component.html'
})

export class PrimaryButtonComponent extends BaseComponent implements OnInit {
  protected config = inject(ConfigsService).primaryButtonConfig();
  @Input() override size: SizeVariant = 'sm';
  @Input() override className!: string;

  ngOnInit(): void {
    this.config.subscribe((s) => {
      this._style = [];
      this.addClass(toClassName([
        s, SizeConfig[this.size], this.className
      ]));
    });
  }
}
