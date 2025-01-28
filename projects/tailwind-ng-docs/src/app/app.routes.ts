import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lab',
    loadComponent: () => import('./components/lab/lab.component').then(m => m.LabComponent)
  },
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
  }
];
