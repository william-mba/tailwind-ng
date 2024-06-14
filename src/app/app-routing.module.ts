import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { AppComponent } from './app.component';

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
    path: 'play',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/button-group',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
