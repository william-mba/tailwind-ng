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

export interface NavItem {
  label: string;
  route: string;
  description?: string;
  category?: NavCategory;
  children?: NavItem[];
}

type NavCategory = 'documentation' | 'components' | 'getting-started';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Documentation',
    route: '/docs',
    category: 'documentation',
    children: [
      {
        label: 'Getting Started',
        route: 'getting-started'
      },
      {
        label: 'Components',
        route: 'components'
      },
      {
        label: 'Customization',
        route: 'customization'
      },
      {
        label: 'Roadmap',
        route: 'roadmap'
      }
    ]
  },
  {
    label: 'Getting Started',
    route: '/getting-started',
    category: 'getting-started',
    children: [
      {
        label: 'Installation',
        route: 'installation'
      },
      {
        label: 'Customization',
        route: 'customization'
      },
      {
        label: 'Roadmap',
        route: 'roadmap'
      }
    ]
  },
  {
    label: 'Components',
    route: '/components',
    category: 'components',
    children: [
      {
        label: 'Avatar',
        route: 'avatars'
      },
      {
        label: 'Badge',
        route: 'badges'
      },
      {
        label: 'Button',
        route: 'buttons'
      },
      {
        label: 'Button Group',
        route: 'button-groups'
      },
      {
        label: 'Checkbox',
        route: 'checkboxes'
      },
      {
        label: 'Combobox',
        route: 'comboboxes'
      },
      {
        label: 'Dialog',
        route: 'dialogs'
      },
      {
        label: 'Dropdown',
        route: 'dropdowns'
      },
      {
        label: 'Icon',
        route: 'icons'
      },
      {
        label: 'Input Group',
        route: 'input-groups'
      },
      {
        label: 'Radio Group',
        route: 'radio-groups'
      },
      {
        label: 'Toggle',
        route: 'toggles'
      }
    ]
  }
];
