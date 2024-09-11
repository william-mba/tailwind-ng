import { Component } from '@angular/core';

@Component({
  selector: 'demo-roadmap',
  templateUrl: './roadmap.component.html'
})
export class RoadmapComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
}
