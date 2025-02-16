import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-button-groups',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './button-groups.component.html',
  styles: ``
})
export class ButtonGroupsComponent {

}
