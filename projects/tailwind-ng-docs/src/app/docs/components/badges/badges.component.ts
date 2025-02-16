import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-badges',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './badges.component.html',
  styles: ``
})
export class BadgesComponent {

}
