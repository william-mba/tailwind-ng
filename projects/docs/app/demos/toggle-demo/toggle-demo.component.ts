import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { TOGGLE_DEMO_SAMPLE } from './toggle-demo.sample';

@Component({
  selector: 'app-toggle-demo',
  templateUrl: './toggle-demo.component.html'
})
export class ToggleDemoComponent {
  sample = TOGGLE_DEMO_SAMPLE;

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
