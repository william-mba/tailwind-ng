import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, DropdownComponent, IconDirective, BadgeComponent } from 'tailwind-ng';
import { OptionDirective, ThemeHelper } from '@tailwind-ng/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NAV_ITEMS } from '../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-docs',
  imports: [NgIf, RouterLink, RouterLinkActive, IconDirective, DropdownComponent, ButtonComponent, OptionDirective, BadgeComponent, RouterOutlet],
  templateUrl: './docs.component.html',
  encapsulation: ViewEncapsulation.None
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
