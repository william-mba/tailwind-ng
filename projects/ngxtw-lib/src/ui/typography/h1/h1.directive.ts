import { Directive, Input, OnInit } from '@angular/core';
import { TypographyConfig } from '../typography.config';
import { resolve, stringToArray } from '../../core/utils/string.util';
import { objectToArray } from '../../core/utils/object.util';

@Directive({
  selector: 'tw-h1',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H1 implements OnInit {
  @Input({ transform: stringToArray })
  public class: string[] = [];

  ngOnInit(): void {
    this.class = resolve(objectToArray(TypographyConfig)
      .concat('text-6xl', 'my-8'), this.class).resolved;
  }
}
