import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	inject,
	ViewEncapsulation,
} from '@angular/core';
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-customizations',
	imports: [TwIcon, TwDialog, TwButton, RouterLink],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './customizations.component.html',
})
export class CustomizationsComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		// import('shiki').then((m) => {
		// 	const { codeToHtml } = m;
		// 	codeToHtml('', { lang: 'ts', theme: 'github-dark-default' }).then((res) => {
		// 		this.cssSelectors = res;
		// 		console.log(res);
		// 	});
		// });

		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 500);
	}
	private readonly sanitizer = inject(DomSanitizer);

	configProviders = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// Shortened for brevity...</span></span>
<span class="line"><span style="color:#FFA657">providers</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#8B949E">  // The application UI provider. Providable at any level of the app.</span></span>
<span class="line"><span style="color:#8B949E">  // Accepts many 'feature-like' and 'standalone' providers.</span></span>
<span class="line"><span style="color:#D2A8FF">  provideUI</span><span style="color:#E6EDF3">(</span></span>
<span class="line"><span style="color:#D2A8FF">    withAvatar</span><span style="color:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#D2A8FF">    withButton</span><span style="color:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#D2A8FF">    withDialog</span><span style="color:#E6EDF3">(), </span><span style="color:#8B949E">// A 'feature-like' provider.</span></span>
<span class="line"><span style="color:#D2A8FF">    withToggle</span><span style="color:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#D2A8FF">    withCheckbox</span><span style="color:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#D2A8FF">    withDropdown</span><span style="color:#E6EDF3">(),</span></span>
<span class="line"><span style="color:#FF7B72">    ...</span></span>
<span class="line"><span style="color:#E6EDF3">  ),</span></span>
<span class="line"><span style="color:#8B949E">  // Also valid.</span></span>
<span class="line"><span style="color:#D2A8FF">  provideDialog</span><span style="color:#E6EDF3">({</span><span style="color:#FF7B72">...</span><span style="color:#E6EDF3">}) </span><span style="color:#8B949E">// A 'standalone' provider.</span></span>
<span class="line"><span style="color:#E6EDF3">],</span></span>`;
	classAttribute = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- avatar with image --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"ring-2 ring-white"</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-slate-50 bg-slate-400"</span><span style="color:#79C0FF"> tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"user"</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder initials --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-lg text-slate-50 bg-slate-400"</span><span style="color:#E6EDF3">&gt; TW &lt;/</span><span style="color:#7EE787">tw-avatar</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span></code></pre>`;

	cssSelectors = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">@</span><span style="color:#D2A8FF">Component</span><span style="color:#E6EDF3">({</span></span>
<span class="line"><span style="color:#8B949E">  // Shortened for brevity...</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#E6EDF3">  templateUrl: </span><span style="color:#A5D6FF">'./my-awesome.component.html'</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">  styles: </span><span style="color:#A5D6FF">'</span></span>
<span class="line"><span style="color:#A5D6FF">    button {</span></span>
<span class="line"><span style="color:#A5D6FF">      border-radius: calc(infinity * 1px);</span></span>
<span class="line"><span style="color:#A5D6FF">   }</span></span>
<span class="line"><span style="color:#A5D6FF">  '</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span style="color:#E6EDF3">})</span></span>
<span class="line"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> class</span><span style="color:#FFA657"> MyAwesomeComponent</span><span style="color:#E6EDF3"> {}</span></span></code></pre>`;

	protected trust(content: string): string {
		return this.sanitizer.bypassSecurityTrustHtml(content) as string;
	}

	copyRec: Record<string, boolean> = {};

	copy(content: string, key: string): void {
		if (!this.copyRec[key]) {
			navigator.clipboard.writeText(content);
			this.copyRec[key] = true;
			timer(3000).subscribe(() => (this.copyRec[key] = false));
		}
	}
}
