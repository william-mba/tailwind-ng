import { afterNextRender, AfterRenderPhase, Component } from '@angular/core';
import { MODAL_DIALOG_DEMO_SAMPLE } from './modal-dialog-demo.sample';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html',
})
export class ModalDialogDemoComponent {

  sample = MODAL_DIALOG_DEMO_SAMPLE;

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
