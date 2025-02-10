import { AfterViewInit, Component } from '@angular/core';
import { TwIcon } from 'tailwind-ng';

@Component({
  selector: 'app-roadmap',
  imports: [TwIcon],
  templateUrl: './roadmap.component.html',
  styles: ``
})
export class RoadmapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }

}
