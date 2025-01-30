import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ButtonComponent, ButtonGroupComponent, IconDirective } from 'tailwind-ng';
import { RouterLink } from '@angular/router';
import { ThemeHelper } from '@tailwind-ng/core';

@Component({
  selector: 'app-main',
  imports: [ButtonComponent, IconDirective, RouterLink, ButtonGroupComponent, NgIf],
  templateUrl: './main.component.html'
})
export class MainComponent {
  protected readonly theme = ThemeHelper;
  switchTheme() {
    this.theme.toggle();
  }
}
