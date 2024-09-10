import { Component } from '@angular/core';
import { AbstractInput, INPUT_SELECTOR } from '../input.base';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: INPUT_SELECTOR,
  imports: [ReactiveFormsModule],
  providers: [{ provide: AbstractInput, useExisting: InputTextComponent }],
  template: `
  <input
    #inputRef
    [type]="type"
    [class]="class"
    [readonly]="readonly"
    [formControl]="control">
    `,
})
export class InputTextComponent extends AbstractInput {
  override type: 'text' | 'email' | 'password' | 'tel' | 'url' = 'text';
  constructor() {
    super();
  }
}
