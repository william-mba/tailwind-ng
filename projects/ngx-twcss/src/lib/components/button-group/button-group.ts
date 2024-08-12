import { Directive, Input, OnInit } from '@angular/core';
import { mergeClassNames } from '../../core/helpers/config.helper';

/** Button group */
@Directive({
  selector: 'tw-button-group, [tw-button-group]',
  standalone: true,
  host: {
    '[class]': 'config'
  }
})
export class ButtonGroup implements OnInit {
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this.config = mergeClassNames("flex items-stretch", this.class);
  }
}
