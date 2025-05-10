import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-input-groups',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, TwButton, TwIcon],
	templateUrl: './input-groups.component.html',
	styles: ``,
})
export class InputGroupsComponent {}
