import { Component, inject } from '@angular/core';
import { ThemeService } from '@tailwind-ng/core';
import { NgIf } from '@angular/common';
import { TwButton, TwButtonGroup, TwIcon } from 'tailwind-ng';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [TwButton, TwIcon, RouterLink, TwButtonGroup, NgIf],
  templateUrl: './main.component.html'
})
export class MainComponent {
  protected readonly theme = inject(ThemeService);
  switchTheme() {
    this.theme.toggle();
  }
}
