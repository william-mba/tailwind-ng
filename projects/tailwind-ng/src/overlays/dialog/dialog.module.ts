import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogContainer } from './dialog-container.directive';

@NgModule({
  imports: [
    DialogComponent,
    DialogContainer
  ],
  exports: [
    DialogComponent,
    DialogContainer
  ]
})
export class DialogModule { }
