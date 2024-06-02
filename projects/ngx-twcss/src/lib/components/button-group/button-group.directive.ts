import { Directive, ElementRef, Input } from '@angular/core';

/**Button group element*/
@Directive({
  selector: 'nxt-button-group',
  standalone: true
})
export class ButtonGroup {
  @Input() className: string = 'inline-flex';

  constructor(private el: ElementRef) {
    this.el.nativeElement.className = this.className;
  }
}
