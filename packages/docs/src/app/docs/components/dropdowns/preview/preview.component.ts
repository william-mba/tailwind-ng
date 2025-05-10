import { Component } from '@angular/core';
import { TwOption } from '../../../../../../../core/src/public-api';
import { TwIcon, TwDropdown, TwButton } from 'tailwind-ng';

@Component({
	selector: 'app-dropdowns-preview',
	imports: [TwDropdown, TwOption, TwIcon, TwButton],
	templateUrl: './preview.component.html',
	styles: ``,
})
export class PreviewComponent {}
