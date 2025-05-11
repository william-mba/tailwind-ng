import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { TwButton, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-buttons',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './buttons.component.html',
  styles: ``,
})
export class ButtonsComponent {}
