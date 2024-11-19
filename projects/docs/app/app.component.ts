import { afterNextRender, AfterRenderPhase, Component, Directive, ElementRef, inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import { toggleTheme } from 'ngxtw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isHomePage = false;
  constructor(private readonly router: Router) {
    afterNextRender(() => {
      hljs.registerLanguage('xml', xml);
      hljs.registerLanguage('json', json);
      hljs.registerLanguage('ts', typescript);
    }, { phase: AfterRenderPhase.Write });

    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        this.isHomePage = x.url === '/';
      }
    });
  }
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark: boolean = false;
  private readonly themeKey: string = 'prefered-theme';

  constructor() {
    this.init();
  }

  init() {
    const preference = localStorage.getItem(this.themeKey);
    if (preference === 'dark' || preference === null || preference === '') {
      this.isDark = true;
      toggleTheme();
    }
  }

  toggle() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      localStorage.setItem(this.themeKey, 'dark');
    }
    if (!this.isDark) {
      localStorage.setItem(this.themeKey, 'light');
    }
    toggleTheme();
  }
}
