import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-dropdowns',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
	templateUrl: './dropdowns.component.html',
	styles: ``,
})
export class DropdownsComponent {}
