import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  ButtonGroupComponent,
  DropdownComponent,
  IconDirective,
  ToggleComponent,
  toggleTheme
} from 'ngxtw';

@Component({
  selector: 'app-root',
  imports: [
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    DropdownComponent,
    IconDirective,
    ToggleComponent,
    ButtonGroupComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  toggle = viewChildren(ToggleComponent);

  ngOnInit() {
    toggleTheme();
  }

  ngAfterViewInit() {
    this.toggle()[5].toggle();
    console.log('toggle', this.toggle()[5]);
  }

  toggleTheme() {
    toggleTheme();
  }


}
