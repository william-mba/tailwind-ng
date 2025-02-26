import { Component, signal } from '@angular/core';
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-dialogs-preview',
  imports: [TwIcon, TwDialog, TwButton],
  templateUrl: './preview.component.html',
  styles: ``
})
export class PreviewComponent {
  opened = {
    1: signal(false),
    2: signal(false),
    3: signal(false),
    4: signal(false),
    5: signal(false),
  }
}
