import { Directive, ElementRef, Input } from '@angular/core';

/**Dropdown label
 * @package ngx-twcss
 */
@Directive({
  selector: 'nxt-dropdown-label',
  standalone: true,
  host: {
    class: 'inline-flex gap-1.5'
  }
})
export class DropdownLabel {
}
