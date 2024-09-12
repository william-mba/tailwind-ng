import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractInput } from './input.base';

@Component({
  selector: 'tw-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [{ provide: AbstractInput, useExisting: InputComponent }],
  template: `
  <input
    #inputRef
    [type]="type"
    [class]="class"
    [readonly]="readonly"
    [formControl]="control">
    `,
})
export class InputComponent extends AbstractInput {
  override type: 'text' | 'email' | 'password' | 'tel' | 'url' = 'text';
  constructor() {
    super();
  }
}
