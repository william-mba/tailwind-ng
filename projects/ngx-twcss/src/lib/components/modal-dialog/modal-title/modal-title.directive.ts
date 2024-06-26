import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { resolveStyle } from '../../../core/helpers/config.helper';

/**Modal title element */
@Directive({
  selector: 'tw-modal-title',
  standalone: true
})
export class ModalTitle implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = 'text-base font-semibold leading-6 text-gray-900';
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}
