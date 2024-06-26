import { Component } from '@angular/core';

/**Backdrop element */
@Component({
  selector: 'tw-backdrop',
  standalone: true,
  template: '',
  host: {
    class: 'fixed inset-0 bg-gray-500 bg-opacity-75'
  }
})
export class Backdrop {}
