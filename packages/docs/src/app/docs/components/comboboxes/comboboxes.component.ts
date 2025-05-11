import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { TwButton, TwIcon } from 'tailwind-ng'

@Component({
  selector: 'app-comboboxes',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
  templateUrl: './comboboxes.component.html',
  styles: ``,
})
export class ComboboxesComponent {}
