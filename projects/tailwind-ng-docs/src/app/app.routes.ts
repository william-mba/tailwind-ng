import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

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
        path: 'themes',
        loadComponent: () => import('./docs/themes/themes.component').then(m => m.ThemesComponent)
      },
      {
        path: 'components',
        loadComponent: () => import('./docs/components/components.component').then(m => m.ComponentsComponent)
      },
      {
        path: 'roadmap',
        loadComponent: () => import('./docs/roadmap/roadmap.component').then(m => m.RoadmapComponent)
      },
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'getting-started',
    title: 'Getting Started with Tailwind NG',
    redirectTo: 'docs/getting-started',
    pathMatch: 'full'
  },
  {
    path: 'components',
    title: 'Tailwind NG Components overview',
    redirectTo: 'docs/components',
    pathMatch: 'full'
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

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      if (title === 'Roadmap') {
        return this.title.setTitle(
          `${title} of Tailwind NG`
        );
      }
      return this.title.setTitle(
        `Tailwind NG ${title} - High-quality ${title} Components built with Tailwind CSS and Angular`
      );
    }
    this.title.setTitle(
      'Tailwind NG - High-quality UI components for large-scale and enterprise Angular applications'
    );
  }
}
