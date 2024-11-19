import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-ref-links',
  host: {
    class: 'text-xs mt-6 block sm:flex items-center *:px-0.5',
  },
  template: `<a class="hover:underline" href="{{ route }}#quick-start">
      Quick start guide
    </a>
    |
    <a class="hover:underline" href="{{ route }}#api"> API reference </a>
    |
    <a class="hover:underline" href="{{ route }}#customizations">
      Customizations
    </a>`,
})
export class ApiRefLinksComponent {
  route!: string;

  constructor(route: ActivatedRoute) {
    this.route = route.snapshot.url[0].path || '';
  }
}
