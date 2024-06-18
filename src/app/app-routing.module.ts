import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { AppComponent } from './app.component';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsDemoComponent
  },
  {
    path: 'button-group',
    component: ButtonGroupDemoComponent
  },
  {
    path: 'dropdown',
    component: DropdownDemoComponent
  },
  {
    path: 'play',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/dropdown',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
