import { Component, HostListener } from '@angular/core';
import { ToggleTheme } from 'ngx-twcss';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
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
