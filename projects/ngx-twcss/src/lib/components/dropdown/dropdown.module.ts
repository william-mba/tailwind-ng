import { NgModule } from '@angular/core';
import { DropdownContainer, DropdownContent } from './dropdown.component';

@NgModule({
  imports: [
    DropdownContainer,
    DropdownContent
  ],
  exports: [
    DropdownContainer,
    DropdownContent
  ]
})
export class Dropdown { }
