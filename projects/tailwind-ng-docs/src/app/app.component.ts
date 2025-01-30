import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeHelper } from '@tailwind-ng/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    ThemeHelper.toggle();
  }
}
