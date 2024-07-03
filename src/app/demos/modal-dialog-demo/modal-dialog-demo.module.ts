import { NgModule } from '@angular/core';
import { ModalDialogDemoComponent } from './modal-dialog-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { Button, ModalDialogModule } from 'ngx-twcss';

const routes: Routes = [
  {
    path: '',
    component: ModalDialogDemoComponent
  }
];

@NgModule({
  declarations: [ModalDialogDemoComponent],
  imports: [
    RouterModule.forChild(routes),
    Button,
    ModalDialogModule
  ],
  exports: [
    RouterModule
  ]
})
export class ModalDialogDemoModule { }
