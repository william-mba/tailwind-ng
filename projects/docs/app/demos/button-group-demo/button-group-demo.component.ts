import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { BUTTON_GROUP_DEMO_SAMPLE } from './button-group-demo.sample';

@Component({
  selector: 'app-button-group-demo',
  templateUrl: './button-group-demo.component.html',
})
export class ButtonGroupDemoComponent {
  sample = BUTTON_GROUP_DEMO_SAMPLE;

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
