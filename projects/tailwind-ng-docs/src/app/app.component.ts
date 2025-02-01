import { Component, OnInit } from '@angular/core';
import { ThemeHelper } from '@tailwind-ng/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div
    class="-z-50 hidden dark:block fixed inset-[calc(var(--spacing)*0)] bg-[image:var(--bg-hero)] bg-cover bg-right-top opacity-5 backdrop-blur-md animate-pulse-8">
  </div>
  <div class="-z-40 hidden dark:block fixed inset-[calc(var(--spacing)*0)] bg-[image:var(--bg-pattern)] opacity-5">
  </div>
  <router-outlet />`
})
export class AppComponent implements OnInit {
  protected readonly theme = ThemeHelper;
  ngOnInit(): void {
    ThemeHelper.init();
  }
}
