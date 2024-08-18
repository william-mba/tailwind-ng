import { Directive, Input, OnInit } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { TypographyConfig } from '../typography.config';

@Directive({
  selector: 'tw-h3',
  standalone: true,
  host: {
    '[class]': 'class'
  }
})
export class H3 implements OnInit {
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(`${toClassNames(TypographyConfig)} text-2xl my-4`, this.class)
  }
}
