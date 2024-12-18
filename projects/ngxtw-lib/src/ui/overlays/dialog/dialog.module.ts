import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogContainer } from './dialog-container.directive';
import { DialogBackdrop } from './dialog-backdrop.directive';

@NgModule({
  imports: [
    DialogComponent,
    DialogContainer,
    DialogBackdrop
  ],
  exports: [
    DialogComponent,
    DialogContainer,
    DialogBackdrop
  ]
})
export class DialogModule { }
