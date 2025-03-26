import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TwButton, TwIcon } from 'tailwind-ng';

@Component({
	selector: 'app-roadmap',
	imports: [TwIcon, TwButton, RouterLink],
	templateUrl: './roadmap.component.html',
	styles: ``,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 500);
	}
}
