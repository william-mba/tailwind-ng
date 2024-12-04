import { Component } from '@angular/core';
import { ButtonComponent, toggleTheme } from 'ngxtw';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  ngOnInit() {
    toggleTheme();
  }

  toggleTheme() {
    toggleTheme();
  }
}
