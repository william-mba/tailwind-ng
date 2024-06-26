import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { resolveStyle } from '../../../core/helpers/config.helper';

/**Modal footer element */
@Directive({
  selector: 'tw-modal-footer',
  standalone: true
})
export class ModalFooter implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = 'grid bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6';
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}
