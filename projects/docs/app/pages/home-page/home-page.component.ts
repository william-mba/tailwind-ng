import { afterNextRender, AfterRenderPhase, Component, inject } from '@angular/core';
import { provideButtonConfig } from 'ngxtw';
import { ThemeService } from '../../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [
    provideButtonConfig({
      primary: {
        bgColor: 'bg-blue-600'
      }
    })
  ]
})
export class HomePageComponent {
  featuredComponents: FeaturedComponent[] = [
    {
      image: 'assets/images/home-page/combobox.png',
      title: 'Comboboxes',
      route: '/comboboxes',
    },
    {
      image: 'assets/images/home-page/input.png',
      title: 'Input Groups',
      route: '/input-groups',
    },
    {
      image: 'assets/images/home-page/button-group.png',
      title: 'Button groups',
      route: '/button-groups',
    },
  ];

  theme = inject(ThemeService);

  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 500);
    }, { phase: AfterRenderPhase.Write })
  }

  toggleTheme() {
    this.theme.toggle();
  }
}

interface FeaturedComponent {
  image: string;
  title: string;
  route: string;
}

