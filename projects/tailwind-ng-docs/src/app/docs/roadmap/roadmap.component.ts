import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  imports: [],
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
