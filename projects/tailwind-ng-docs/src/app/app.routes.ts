import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadComponent: () => import('./docs/docs.component').then(m => m.DocsComponent),
    children: [
      {
        path: 'getting-started',
        title: 'Getting Started',
        loadComponent: () => import('./docs/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
      },
      {
        path: 'themes',
        title: 'Themes overview',
        loadComponent: () => import('./docs/themes/themes.component').then(m => m.ThemesComponent)
      },
      {
        path: 'components',
        title: 'Components overview',
        loadComponent: () => import('./docs/components/components.component').then(m => m.ComponentsComponent)
      },
      {
        path: 'roadmap',
        title: 'Roadmap',
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
    redirectTo: 'docs/getting-started',
    pathMatch: 'full'
  },
  {
    path: 'components',
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
  private readonly title = inject(Title);
  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      if (['Components overview', 'Roadmap', 'Themes overview'].includes(title)) {
        return this.title.setTitle(
          `${title} of Tailwind NG`
        );
      }
      if (['Getting Started'].includes(title)) {
        return this.title.setTitle(
          `${title} with Tailwind NG`
        );
      }
      return this.title.setTitle(
        `Tailwind NG - ${title}`
      );
    }
    this.title.setTitle(
      'Tailwind NG - Beautiful, fast and accessible UI components crafted with Tailwind CSS and Angular.'
    );
  }
}
