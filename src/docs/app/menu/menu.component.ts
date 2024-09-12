import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { setDarkMode, setLightMode } from 'ngxtw';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('150ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('75ms 75ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ]),
    ]),
  ],
  providers: [
    provideAnimations(),
  ],
  host: {
    '(window:resize)': 'onResize($event)',
  }
})
export class MenuComponent {
  dark: boolean = true;
  open: boolean = false;
  screenWidth: number = window.innerWidth;

  private readonly themeKey: string = 'prefered-theme';

  ngOnInit() {
    this.initTheme();
  }

  initTheme() {
    const themePreference = localStorage.getItem(this.themeKey);
    if (themePreference === 'dark') {
      this.dark = true;
      setDarkMode();
      return;
    }
    this.dark = false;
    setLightMode();
  }

  toggleTheme() {
    this.dark = !this.dark;

    if (this.dark) {
      setDarkMode();
      localStorage.setItem(this.themeKey, 'dark');
    }
    if (!this.dark) {
      setLightMode();
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  isLargeScreen() {
    return this.screenWidth > 1536;
  }

  toggle() {
    this.open = !this.open;
  }

  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
