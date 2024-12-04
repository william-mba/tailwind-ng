import { Directive, Input, OnInit } from '@angular/core';
import { TypographyConfig } from '../typography.config';
import { objectToArray } from '../../core/utils/object.util';
import { stringToArray, resolve } from '../../core/utils/string.util';

@Directive({
  selector: 'tw-h4',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H4 implements OnInit {
  @Input({ transform: stringToArray })
  public class: string[] = [];

  ngOnInit(): void {
    this.class = resolve(objectToArray(TypographyConfig)
      .concat('text-lg', 'my-2'), this.class).resolved;
  }
}
