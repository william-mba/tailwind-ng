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
    path: 'avatar',
    component: AvatarDemoComponent
  },
  {
    path: 'badge',
    component: BadgeDemoComponent
  },
  {
    path: 'dropdown',
    component: DropdownDemoComponent
  },
  {
    path: 'button-group',
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
    redirectTo: '/avatar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
