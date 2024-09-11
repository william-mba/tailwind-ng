import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToggleTheme } from 'ngxtw';

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
  ]
})
export class MenuComponent {
  dark: boolean = false;

  screenWidth: number = window.innerWidth;

  open: boolean = false;

  ToggleTheme() {
    ToggleTheme();
    this.dark = !this.dark;
  }

  isLargeScreen() {
    return this.screenWidth > 1536;
  }

  toggle() {
    this.open = !this.open;
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
