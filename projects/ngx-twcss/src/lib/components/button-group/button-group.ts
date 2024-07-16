import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { resolveClassName } from '../../core/helpers/config.helper';

/** Button group */
@Directive({
  selector: 'tw-button-group, [tw-button-group]',
  standalone: true
})
export class ButtonGroup implements OnInit {
  @Input() className!: string;

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    let base = 'flex items-stretch';
    this.el.nativeElement.className = resolveClassName(base, this.className);
  }
}
