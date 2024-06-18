import { Directive } from '@angular/core';

/**Button group element
 * @package ngx-twcss
*/
@Directive({
  selector: 'nxt-button-group',
  standalone: true,
  host: {
    class: 'inline-flex'
  }
})
export class ButtonGroup { }
