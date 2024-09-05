import { Directive, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { TypographyConfig } from '../typography.config';

@Directive({
  selector: 'tw-h4',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H4 implements OnInit {
  @Input()
  public class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(`${toClassNames(TypographyConfig)} text-lg my-2`, this.class)
  }
}
