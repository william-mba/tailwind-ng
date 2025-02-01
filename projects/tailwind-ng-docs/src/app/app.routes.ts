import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadComponent: () => import('./docs/docs.component').then(m => m.DocsComponent),
    children: [
      {
        path: 'getting-started',
        loadComponent: () => import('./docs/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
      },
      {
        path: 'components',
        loadComponent: () => import('./docs/components/components.component').then(m => m.ComponentsComponent),
        children: [
          {
            path: 'elements',
            loadComponent: () => import('./docs/elements/elements.component').then(m => m.ElementsComponent)
          },
          {
            path: 'forms',
            loadComponent: () => import('./docs/forms/forms.component').then(m => m.FormsComponent)
          },
          {
            path: 'overlays',
            loadComponent: () => import('./docs/overlays/overlays.component').then(m => m.OverlaysComponent)
          }
        ]
      },
    ]
  },
  {
    path: 'getting-started',
    redirectTo: 'docs/getting-started'
  },
  {
    path: 'components',
    redirectTo: 'docs/components'
  },
  {
    path: 'lab',
    loadComponent: () => import('./components/lab/lab.component').then(m => m.LabComponent)
  },
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
  }
];
