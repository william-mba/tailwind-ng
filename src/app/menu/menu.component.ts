import { Component, HostListener } from '@angular/core';
import { ToggleTheme } from 'ngx-twcss';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  dark: boolean = false;

  screenWidth: number = window.innerWidth;

  screens = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536
  }

  open: boolean = true;

  ToggleTheme() {
    ToggleTheme();
    this.dark = !this.dark;
  }

  toggle() {
    if (this.screenWidth <= this.screens.xxl) {
      this.open = !this.open;
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= this.screens.md) {
      this.open = false;
    } else {
      this.open = true;
    }
  }
}
