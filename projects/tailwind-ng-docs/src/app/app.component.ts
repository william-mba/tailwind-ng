import { Component, inject } from '@angular/core';
import { ThemeService } from '@tailwind-ng/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {
  protected readonly theme = inject(ThemeService).init();
}
