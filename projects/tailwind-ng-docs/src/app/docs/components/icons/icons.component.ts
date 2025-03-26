import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-icons',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
	templateUrl: './icons.component.html',
	styles: ``,
})
export class IconsComponent {}
