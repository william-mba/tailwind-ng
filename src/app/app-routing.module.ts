import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';
import { BadgeDemoComponent } from './demos/badge-demo/badge-demo.component';
import { AvatarDemoComponent } from './demos/avatar-demo/avatar-demo.component';
import { ModalDialogDemoComponent } from './demos/modal-dialog-demo/modal-dialog-demo.component';

const routes: Routes = [
  {
    path: 'modal-dialogs',
    component: ModalDialogDemoComponent
  },
  {
    path: 'avatars',
    component: AvatarDemoComponent
  },
  {
    path: 'badges',
    component: BadgeDemoComponent
  },
  {
    path: 'dropdowns',
    component: DropdownDemoComponent
  },
  {
    path: 'buttons-group',
    component: ButtonGroupDemoComponent
  },
  {
    path: 'buttons',
    component: ButtonsDemoComponent
  },
  {
    path: '',
    redirectTo: 'modal-dialogs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'buttons'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
