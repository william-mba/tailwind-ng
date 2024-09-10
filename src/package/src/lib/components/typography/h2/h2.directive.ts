import { Directive, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { TypographyConfig } from '../typography.config';

@Directive({
  selector: 'tw-h2',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H2 implements OnInit {
  @Input()
  public class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(`${toClassNames(TypographyConfig)} text-4xl my-6`, this.class)
  }
}
