import { Component } from '@angular/core';
import { TwOption } from '@tailwind-ng/core';
import { TwButton, TwButtonGroup, TwDropdown, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-button-groups-preview',
  imports: [TwButton, TwButtonGroup, TwIcon, TwDropdown, TwOption],
  templateUrl: './preview.component.html',
  styles: ``
})
export class PreviewComponent {

}
