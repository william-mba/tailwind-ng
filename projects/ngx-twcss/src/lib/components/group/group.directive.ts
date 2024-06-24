import { Directive } from '@angular/core';

/**Group element
 * @package ngx-twcss
*/
@Directive({
  selector: 'tw-group',
  standalone: true,
  host: {
    class: 'inline-flex'
  }
})
export class Group { }
