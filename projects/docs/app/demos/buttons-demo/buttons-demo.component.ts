import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { BUTTON_DEMO_SAMPLE } from './buttons-demo.sample';

@Component({
  selector: 'app-buttons-demo',
  templateUrl: './buttons-demo.component.html'
})
export class ButtonsDemoComponent {
  sample = BUTTON_DEMO_SAMPLE;

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
