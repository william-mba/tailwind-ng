import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogContainer } from './dialog-container.directive';
import { DialogScrim } from './dialog-scrim.directive';

@NgModule({
  imports: [
    DialogComponent,
    DialogContainer,
    DialogScrim
  ],
  exports: [
    DialogComponent,
    DialogContainer,
    DialogScrim
  ]
})
export class DialogModule { }
