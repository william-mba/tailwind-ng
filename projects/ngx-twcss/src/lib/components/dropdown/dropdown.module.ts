import { NgModule } from '@angular/core';
import { Dropdown, DropdownContent } from './dropdown.component';

@NgModule({
  imports: [
    Dropdown,
    DropdownContent
  ],
  exports: [
    Dropdown,
    DropdownContent
  ]
})
export class DropdownModule { }
