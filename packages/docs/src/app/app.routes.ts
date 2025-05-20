import { inject, Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router'

export const routes: Routes = [
  {
    path: 'docs',
    loadComponent: () => import('./docs/docs.component').then(m => m.DocsComponent),
    children: [
      {
        path: 'getting-started',
        title: 'Getting Started',
        loadComponent: () =>
          import('./docs/getting-started/getting-started.component').then(
            m => m.GettingStartedComponent
          ),
      },
      {
        path: 'themes',
        title: 'Themes overview',
        loadComponent: () => import('./docs/themes/themes.component').then(m => m.ThemesComponent),
      },
      {
        path: 'customizations',
        title: 'Customizations guide',
        loadComponent: () =>
          import('./docs/customizations/customizations.component').then(
            m => m.CustomizationsComponent
          ),
      },
      {
        path: 'components-overview',
        title: 'Components overview',
        loadComponent: () =>
          import('./docs/components-overview/components-overview.component').then(
            m => m.ComponentsOverviewComponent
          ),
      },
      {
        path: 'roadmap',
        title: 'Roadmap',
        loadComponent: () =>
          import('./docs/roadmap/roadmap.component').then(m => m.RoadmapComponent),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('./docs/components/components.component').then(m => m.ComponentsComponent),
        children: [
          {
            path: 'avatars',
            title: 'Avatars Components',
            loadComponent: () =>
              import('./docs/components/avatars/avatars.component').then(m => m.AvatarsComponent),
            children: [
              {
                path: 'preview',
                title: 'Avatars Preview',
                loadComponent: () =>
                  import('./docs/components/avatars/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Avatars Usage',
                loadComponent: () =>
                  import('./docs/components/avatars/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Avatars API',
                loadComponent: () =>
                  import('./docs/components/avatars/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'badges',
            title: 'Badges',
            loadComponent: () =>
              import('./docs/components/badges/badges.component').then(m => m.BadgesComponent),
            children: [
              {
                path: 'preview',
                title: 'Badges Preview',
                loadComponent: () =>
                  import('./docs/components/badges/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Badges Usage',
                loadComponent: () =>
                  import('./docs/components/badges/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Badges API',
                loadComponent: () =>
                  import('./docs/components/badges/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'buttons',
            title: 'Buttons',
            loadComponent: () =>
              import('./docs/components/buttons/buttons.component').then(m => m.ButtonsComponent),
            children: [
              {
                path: 'preview',
                title: 'Buttons Preview',
                loadComponent: () =>
                  import('./docs/components/buttons/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Buttons Usage',
                loadComponent: () =>
                  import('./docs/components/buttons/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Buttons API',
                loadComponent: () =>
                  import('./docs/components/buttons/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'button-groups',
            title: 'Button Groups',
            loadComponent: () =>
              import('./docs/components/button-groups/button-groups.component').then(
                m => m.ButtonGroupsComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Button Groups Preview',
                loadComponent: () =>
                  import('./docs/components/button-groups/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Button Groups Usage',
                loadComponent: () =>
                  import('./docs/components/button-groups/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Button Groups API',
                loadComponent: () =>
                  import('./docs/components/button-groups/api/api.component').then(
                    m => m.ApiComponent
                  ),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'checkboxes',
            title: 'Checkboxes',
            loadComponent: () =>
              import('./docs/components/checkboxes/checkboxes.component').then(
                m => m.CheckboxesComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Checkboxes Preview',
                loadComponent: () =>
                  import('./docs/components/checkboxes/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Checkboxes Usage',
                loadComponent: () =>
                  import('./docs/components/checkboxes/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Checkboxes API',
                loadComponent: () =>
                  import('./docs/components/checkboxes/api/api.component').then(
                    m => m.ApiComponent
                  ),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'comboboxes',
            title: 'Comboboxes',
            loadComponent: () =>
              import('./docs/components/comboboxes/comboboxes.component').then(
                m => m.ComboboxesComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Comboboxes Preview',
                loadComponent: () =>
                  import('./docs/components/comboboxes/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Comboboxes Usage',
                loadComponent: () =>
                  import('./docs/components/comboboxes/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Comboboxes API',
                loadComponent: () =>
                  import('./docs/components/comboboxes/api/api.component').then(
                    m => m.ApiComponent
                  ),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'dialogs',
            title: 'Dialogs',
            loadComponent: () =>
              import('./docs/components/dialogs/dialogs.component').then(m => m.DialogsComponent),
            children: [
              {
                path: 'preview',
                title: 'Dialogs Preview',
                loadComponent: () =>
                  import('./docs/components/dialogs/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Dialogs Usage',
                loadComponent: () =>
                  import('./docs/components/dialogs/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Dialogs API',
                loadComponent: () =>
                  import('./docs/components/dialogs/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'dropdowns',
            title: 'Dropdowns',
            loadComponent: () =>
              import('./docs/components/dropdowns/dropdowns.component').then(
                m => m.DropdownsComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Dropdowns Preview',
                loadComponent: () =>
                  import('./docs/components/dropdowns/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Dropdowns Usage',
                loadComponent: () =>
                  import('./docs/components/dropdowns/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Dropdowns API',
                loadComponent: () =>
                  import('./docs/components/dropdowns/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'icons',
            title: 'Icons',
            loadComponent: () =>
              import('./docs/components/icons/icons.component').then(m => m.IconsComponent),
            children: [
              {
                path: 'preview',
                title: 'Icons Preview',
                loadComponent: () =>
                  import('./docs/components/icons/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Icons Usage',
                loadComponent: () =>
                  import('./docs/components/icons/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Icons API',
                loadComponent: () =>
                  import('./docs/components/icons/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'input-groups',
            title: 'Input Groups',
            loadComponent: () =>
              import('./docs/components/input-groups/input-groups.component').then(
                m => m.InputGroupsComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Input Groups Preview',
                loadComponent: () =>
                  import('./docs/components/input-groups/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Input Groups Usage',
                loadComponent: () =>
                  import('./docs/components/input-groups/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Input Groups API',
                loadComponent: () =>
                  import('./docs/components/input-groups/api/api.component').then(
                    m => m.ApiComponent
                  ),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'radio-groups',
            title: 'Radio Groups',
            loadComponent: () =>
              import('./docs/components/radio-groups/radio-groups.component').then(
                m => m.RadioGroupsComponent
              ),
            children: [
              {
                path: 'preview',
                title: 'Radio Groups Preview',
                loadComponent: () =>
                  import('./docs/components/radio-groups/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Radio Groups Usage',
                loadComponent: () =>
                  import('./docs/components/radio-groups/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Radio Groups API',
                loadComponent: () =>
                  import('./docs/components/radio-groups/api/api.component').then(
                    m => m.ApiComponent
                  ),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'toggles',
            title: 'Toggles',
            loadComponent: () =>
              import('./docs/components/toggles/toggles.component').then(m => m.TogglesComponent),
            children: [
              {
                path: 'preview',
                title: 'Toggles Preview',
                loadComponent: () =>
                  import('./docs/components/toggles/preview/preview.component').then(
                    m => m.PreviewComponent
                  ),
              },
              {
                path: 'usage',
                title: 'Toggles Usage',
                loadComponent: () =>
                  import('./docs/components/toggles/usage/usage.component').then(
                    m => m.UsageComponent
                  ),
              },
              {
                path: 'api',
                title: 'Toggles API',
                loadComponent: () =>
                  import('./docs/components/toggles/api/api.component').then(m => m.ApiComponent),
              },
              {
                path: '',
                redirectTo: 'preview',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: '',
            redirectTo: 'avatars',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'getting-started',
    redirectTo: 'docs/getting-started',
    pathMatch: 'full',
  },
  {
    path: 'components',
    redirectTo: 'docs/components',
    pathMatch: 'full',
  },
  {
    path: 'components-overview',
    redirectTo: 'docs/components-overview',
    pathMatch: 'full',
  },
  {
    path: 'lab',
    loadComponent: () => import('./components/lab/lab.component').then(m => m.LabComponent),
  },
  {
    path: 'dialogs-p01',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p01/p01.component').then(m => m.P01Component),
  },
  {
    path: 'dialogs-p02',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p02/p02.component').then(m => m.P02Component),
  },
  {
    path: 'dialogs-p03',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p03/p03.component').then(m => m.P03Component),
  },
  {
    path: 'dialogs-p04',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p04/p04.component').then(m => m.P04Component),
  },
  {
    path: 'dialogs-p05',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p05/p05.component').then(m => m.P05Component),
  },
  {
    path: 'dialogs-p06',
    title: 'Dialogs Preview',
    loadComponent: () =>
      import('./docs/components/dialogs/preview/p06/p06.component').then(m => m.P06Component),
  },
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
  },
]

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title)
  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState)
    if (title) {
      if (['Components overview', 'Roadmap', 'Themes overview'].includes(title)) {
        return this.title.setTitle(`${title} of Tailwind NG`)
      }
      if (['Getting Started'].includes(title)) {
        return this.title.setTitle(`${title} with Tailwind NG`)
      }
      return this.title.setTitle(`Tailwind NG - ${title}`)
    }
    this.title.setTitle(
      'Tailwind NG - Beautiful, fast and accessible UI components crafted with Tailwind CSS and Angular.'
    )
  }
}
