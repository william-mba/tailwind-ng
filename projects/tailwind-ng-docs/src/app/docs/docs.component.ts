import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, DropdownComponent, IconDirective } from 'tailwind-ng';
import { OptionDirective, ThemeHelper } from '@tailwind-ng/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-docs',
  imports: [NgIf, RouterLink, RouterLinkActive, IconDirective, DropdownComponent, ButtonComponent, OptionDirective, RouterOutlet],
  templateUrl: './docs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent {
  isNavOpened = false;
  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

  releaseTag = {
    active: 'latest',
    options: [
      { value: 'latest', label: 'Latest' },
      { value: 'next', label: 'Next' },
      { value: 'dev', label: 'Dev' },
    ]
  };

  updateTag(value: string) {
    this.releaseTag.active = value;
  }
  protected readonly theme = ThemeHelper;
  switchTheme() {
    this.theme.toggle();
  }
  protected readonly navItems = NAV_ITEMS;
}

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
    label: 'Overview',
    route: '/docs',
    category: 'documentation',
    children: [
      {
        label: 'Getting Started',
        route: 'getting-started'
      },
      {
        label: 'Themes',
        route: 'themes'
      },
      {
        label: 'Components',
        route: 'components'
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
