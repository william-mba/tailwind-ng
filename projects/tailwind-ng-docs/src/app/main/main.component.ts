import { Component, inject } from '@angular/core';
import { ThemeService } from '@tailwind-ng/core';
import { provideButton, TwButton, TwIcon } from 'tailwind-ng';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [TwButton, TwIcon, RouterLink],
  providers: [provideButton({ base: 'rounded-full!' })],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  protected readonly theme = inject(ThemeService);
  switchTheme() {
    requestAnimationFrame(() => {
      this.theme.toggle();
    });
  }
}
