import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { resolveStyle } from '../../../core/helpers/config.helper';

/**Modal message element */
@Directive({
  selector: 'tw-modal-message',
  standalone: true
})
export class ModalMessage implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = 'text-sm text-gray-500';
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}
