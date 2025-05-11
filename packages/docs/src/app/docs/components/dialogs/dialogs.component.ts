import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { TwButton, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-dialogs',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './dialogs.component.html',
})
export class DialogsComponent {}
