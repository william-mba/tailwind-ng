import { Directive, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { TypographyConfig } from '../typography.config';

@Directive({
  selector: 'tw-h1',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H1 implements OnInit {
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(`${toClassNames(TypographyConfig)} text-6xl my-8`, this.class)
  }
}
