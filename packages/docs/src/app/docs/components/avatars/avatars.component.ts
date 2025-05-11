import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { TwButton, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-avatars',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './avatars.component.html',
  styles: ``,
})
export class AvatarsComponent {}
