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
        path: 'components-overview',
        title: 'Components overview',
        loadComponent: () => import('./docs/components-overview/components-overview.component').then(m => m.ComponentsOverviewComponent)
      },
      {
        path: 'roadmap',
        title: 'Roadmap',
        loadComponent: () => import('./docs/roadmap/roadmap.component').then(m => m.RoadmapComponent)
      },
      {
        path: 'components',
        loadComponent: () => import('./docs/components/components.component').then(m => m.ComponentsComponent),
        children: [
          {
            path: 'avatars',
            title: 'Avatars Components',
            loadComponent: () => import('./docs/components/avatars/avatars.component').then(m => m.AvatarsComponent),
            children: [
              {
                path: 'preview',
                title: 'Avatars Components Preview',
                loadComponent: () => import('./docs/components/avatars/preview/preview.component').then(m => m.PreviewComponent)
              },
              {
                path: 'usage',
                title: 'Avatars Components Usage',
                loadComponent: () => import('./docs/components/avatars/usage/usage.component').then(m => m.UsageComponent)
              },
              {
                path: 'api',
                title: 'Avatars Components API',
                loadComponent: () => import('./docs/components/avatars/api/api.component').then(m => m.ApiComponent)
              },
              {
                path: 'customization',
                title: 'Avatars Components Customization',
                loadComponent: () => import('./docs/components/avatars/customization/customization.component').then(m => m.CustomizationComponent)
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full'
              }
            ]
          },
          {
            path: 'badges',
            title: 'Badges',
            loadComponent: () => import('./docs/components/badges/badges.component').then(m => m.BadgesComponent)
          },
          {
            path: 'buttons',
            title: 'Buttons',
            loadComponent: () => import('./docs/components/buttons/buttons.component').then(m => m.ButtonsComponent)
          },
          {
            path: 'button-groups',
            title: 'Button Groups',
            loadComponent: () => import('./docs/components/button-groups/button-groups.component').then(m => m.ButtonGroupsComponent)
          },
          {
            path: 'checkboxes',
            title: 'Checkboxes',
            loadComponent: () => import('./docs/components/checkboxes/checkboxes.component').then(m => m.CheckboxesComponent)
          },
          {
            path: 'comboboxes',
            title: 'Comboboxes',
            loadComponent: () => import('./docs/components/comboboxes/comboboxes.component').then(m => m.ComboboxesComponent)
          },
          {
            path: 'dialogs',
            title: 'Dialogs',
            loadComponent: () => import('./docs/components/dialogs/dialogs.component').then(m => m.DialogsComponent)
          },
          {
            path: 'dropdowns',
            title: 'Dropdowns',
            loadComponent: () => import('./docs/components/dropdowns/dropdowns.component').then(m => m.DropdownsComponent)
          },
          {
            path: 'icons',
            title: 'Icons',
            loadComponent: () => import('./docs/components/icons/icons.component').then(m => m.IconsComponent)
          },
          {
            path: 'input-groups',
            title: 'Input Groups',
            loadComponent: () => import('./docs/components/input-groups/input-groups.component').then(m => m.InputGroupsComponent)
          },
          {
            path: 'radio-groups',
            title: 'Radio Groups',
            loadComponent: () => import('./docs/components/radio-groups/radio-groups.component').then(m => m.RadioGroupsComponent)
          },
          {
            path: 'toggles',
            title: 'Toggles',
            loadComponent: () => import('./docs/components/toggles/toggles.component').then(m => m.TogglesComponent)
          },
          {
            path: '',
            redirectTo: 'avatars',
            pathMatch: 'full'
          },
        ]
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
    path: 'components-overview',
    redirectTo: 'docs/components-overview',
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
