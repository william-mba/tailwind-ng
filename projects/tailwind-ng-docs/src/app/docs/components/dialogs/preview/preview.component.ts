import { Component } from '@angular/core';
import { TwBackdrop, TwButton, TwDialog, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-dialogs-preview',
  imports: [TwIcon, TwDialog, TwButton, TwBackdrop],
  templateUrl: './preview.component.html',
  styles: ``
})
export class PreviewComponent { }
