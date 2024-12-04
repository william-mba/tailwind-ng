import { Directive, Input, OnInit } from '@angular/core';
import { TypographyConfig } from '../typography.config';
import { resolve, stringToArray } from '../../core/utils/string.util';
import { objectToArray } from '../../core/utils/object.util';

@Directive({
  selector: 'tw-h2',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H2 implements OnInit {
  @Input({ transform: stringToArray })
  public class: string[] = [];

  ngOnInit(): void {
    this.class = resolve(objectToArray(TypographyConfig)
      .concat('text-4xl', 'my-6'), this.class).resolved;
  }
}
