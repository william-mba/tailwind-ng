import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, DialogModule, IconDirective } from 'tailwind-ng';

@Component({
  selector: 'app-components',
  imports: [IconDirective, DialogModule, ButtonComponent, RouterLink],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './components.component.html',
})
export class ComponentsComponent {

}
