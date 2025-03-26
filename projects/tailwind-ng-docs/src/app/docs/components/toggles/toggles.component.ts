import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-toggles',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
	templateUrl: './toggles.component.html',
	styles: ``,
})
export class TogglesComponent {}
