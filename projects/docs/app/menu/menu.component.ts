import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../app.component';
import { ButtonConfig, ReactiveConfigManager } from 'ngxtw';

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
  host: {
    '(window:resize)': 'onResize($event)',
    '(window:scroll)': 'onScroll()',
  }
})
export class MenuComponent {
  theme = inject(ThemeService);
  open: boolean = false;
  screenWidth: number = window.innerWidth;
  shortcutsButtonIsOpen: boolean = false;
  scrollPos: number = 0;

  colorPalette!: ColorPalette;

  reactiveConfigManager = inject(ReactiveConfigManager);

  usePalette(color: ColorPalette) {
    this.colorPalette = color;
    this.reactiveConfigManager.update<ButtonConfig>('Button', {
      tonal: {
        bgColor: `bg-${color}-500`,
        textColor: `text-${color}-600`,
      },
      primary: {
        bgColor: `bg-${color}-600`,
        focusVisible: {
          outlineColor: `focus-visible:outline-${color}-600`,
        }
      },
      text: {
        textColor: `text-${color}-800`,
        dark: {
          textColor: `dark:text-${color}-200`
        }
      },
      secondary: {
        bgColor: `bg-${color}-500`,
        textColor: `text-${color}-600`,
        ringColor: `ring-${color}-500`,
        dark: {
          bgColor: `dark:bg-${color}-400`,
          textColor: `dark:text-${color}-600`,
          ringColor: `dark:ring-${color}-400`,
        }
      }
    });
  }

  toggleShortcutsButton() {
    this.shortcutsButtonIsOpen = !this.shortcutsButtonIsOpen;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  toggleTheme() {
    this.theme.toggle();
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

  onScroll() {
    this.scrollPos = window.scrollY;
  }
}

type ColorPalette = 'rose' | 'orange' | 'violet' | 'emerald' | 'pink' | 'indigo' | 'cyan' | 'teal' | 'amber' | 'lime' | 'green' | 'red' | 'blue' | 'purple' | 'yellow' | 'gray'
