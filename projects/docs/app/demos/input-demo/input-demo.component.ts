import { afterNextRender, AfterRenderPhase, Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { INPUT_DEMO_SAMPLE } from './input-demo.sample';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
})
export class InputDemoComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  isInvalid = (control: AbstractControl): boolean => control.invalid;
  isTouchedAndInvalid = (control: AbstractControl): boolean => control.touched && control.invalid;

  email = this._formBuilder.control('williammba', Validators.email);
  sample = INPUT_DEMO_SAMPLE;

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
