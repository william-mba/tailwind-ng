import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { BADGE_DEMO_SAMPLE } from './badge-demo.sample';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './badge-demo.component.html',
})
export class BadgeDemoComponent {
  sample = BADGE_DEMO_SAMPLE;
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
}
