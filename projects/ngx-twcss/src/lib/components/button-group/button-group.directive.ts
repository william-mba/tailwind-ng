import { Directive } from '@angular/core';

/**Button group element*/
@Directive({
  selector: 'nxt-button-group',
  standalone: true,
  host: {
    class: 'inline-flex'
  }
})
export class ButtonGroup { }
