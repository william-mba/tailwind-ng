import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '@tailwind-ng/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	template: `
		<router-outlet />
	`,
})
export class AppComponent implements OnInit {
	protected readonly theme = inject(ThemeService);

	ngOnInit(): void {
		this.theme.init();
	}
}
