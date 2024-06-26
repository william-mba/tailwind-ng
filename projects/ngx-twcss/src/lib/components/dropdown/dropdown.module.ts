import { NgModule } from '@angular/core';
import { Dropdown, DropdownItem } from './dropdown.component';

@NgModule({
  imports: [
    Dropdown,
    DropdownItem
  ],
  exports: [
    Dropdown,
    DropdownItem
  ]
})
export class DropdownModule { }
