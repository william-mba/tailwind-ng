import { Component, HostListener } from '@angular/core';
import { ToggleTheme } from 'ngx-twcss';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  dark: boolean = false;

  screenWidth: number = window.innerWidth;

  open: boolean = true;

  ToggleTheme() {
    ToggleTheme();
    this.dark = !this.dark;
  }

  openClose() {
    this.open = !this.open;
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 750) {
      this.open = false;
    } else {
      this.open = true;
    }
  }
}
