import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { AppComponent } from './app.component';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';
import { BadgeDemoComponent } from './demos/badge-demo/badge-demo.component';
import { AvatarDemoComponent } from './demos/avatar-demo/avatar-demo.component';

const routes: Routes = [
  {
    path: 'modal-dialogs',
    loadChildren: () => import('./demos/modal-dialog-demo/modal-dialog-demo.module').then(m => m.ModalDialogDemoModule)
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
    path: 'play',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/modal-dialogs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
