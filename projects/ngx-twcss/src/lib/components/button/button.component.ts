import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@Component({
  selector: 'nxt-button',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'soft' = 'primary';
}
