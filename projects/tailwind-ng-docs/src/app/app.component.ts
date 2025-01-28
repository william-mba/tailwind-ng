import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeHelper } from '@tailwind-ng/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  protected readonly theme = ThemeHelper;
  ngOnInit(): void {
    this.theme.toggle();
  }
}
