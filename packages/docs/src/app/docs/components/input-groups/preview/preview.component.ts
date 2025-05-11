import { Component, inject } from '@angular/core'
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { TwButton, TwButtonGroup, TwIcon, TwInputText } from 'tailwind-ng'

@Component({
  selector: 'app-input-groups-preview',
  imports: [TwInputText, TwIcon, TwButton, ReactiveFormsModule, TwButtonGroup],
  templateUrl: './preview.component.html',
  styles: ``,
})
export class PreviewComponent {
  private _formBuilder = inject(NonNullableFormBuilder)
  email = this._formBuilder.control('williammba', Validators.email)

  isInvalid = (control: AbstractControl): boolean => control.invalid
  isTouchedAndInvalid = (control: AbstractControl): boolean => control.touched && control.invalid
}
