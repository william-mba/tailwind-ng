import { Component } from '@angular/core';
import { ToggleTheme } from 'ngxtw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme: number = 0;
  title = 'Ngx-Twcss Playground';

  ngOnInit() {
    ToggleTheme();
  }

  reset() {
    localStorage.removeItem('last-used-theme');
    location.reload();
  }
}
