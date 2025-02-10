import { Component, inject } from '@angular/core';
import { ThemeService } from '@tailwind-ng/core';
import { NgIf } from '@angular/common';
import { ButtonComponent, ButtonGroupComponent, IconDirective } from 'tailwind-ng';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ButtonComponent, IconDirective, RouterLink, ButtonGroupComponent, NgIf],
  templateUrl: './main.component.html'
})
export class MainComponent {
  protected readonly theme = inject(ThemeService);
  switchTheme() {
    this.theme.toggle();
  }
}
