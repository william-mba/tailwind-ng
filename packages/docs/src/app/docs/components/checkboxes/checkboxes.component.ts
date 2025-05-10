import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-checkboxes',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
	templateUrl: './checkboxes.component.html',
	styles: ``,
})
export class CheckboxesComponent {}
