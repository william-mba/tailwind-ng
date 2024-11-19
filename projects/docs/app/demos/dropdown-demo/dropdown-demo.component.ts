import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { DROPDOWN_DEMO_SAMPLE } from './dropdown-demo.sample';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
})
export class DropdownDemoComponent {
  sample = DROPDOWN_DEMO_SAMPLE;

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
