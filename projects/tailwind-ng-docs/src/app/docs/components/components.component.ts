import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TwButton, TwDialogModule, TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-components',
  imports: [TwIcon, TwDialogModule, TwButton, RouterLink],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './components.component.html',
})
export class ComponentsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }

}
