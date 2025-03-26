import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';
// import { codeToHtml } from 'shiki';

@Component({
	selector: 'app-buttons-usage',
	imports: [],
	templateUrl: './usage.component.html',
	styles: ``,
})
export class UsageComponent {
	private readonly sanitizer = inject(DomSanitizer);
	componentsImportsHTML = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.component.ts</span></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { TwBadge } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">@</span><span style="color:#D2A8FF">Component</span><span style="color:#E6EDF3">({</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-gray-800/60" style="color:#E6EDF3">  imports: [TwBadge],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> class</span><span style="color:#FFA657"> MyAwesomeComponent</span><span style="color:#E6EDF3"> {}</span></span></code></pre>`;
	templateUpdateHTML = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- flat badge --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-orange-500 bg-orange-500/10"</span><span style="color:#E6EDF3">&gt;Badge&lt;/</span><span style="color:#7EE787">tw-badge</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- rounded badge with leading icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-indigo-500 bg-indigo-500/10 rounded-full"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"dot"</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  Badge</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;/</span><span style="color:#7EE787">tw-badge</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- badge with trailling icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text-orange-500 bg-orange-500/10"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  Badge</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"x-mark"</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"hover:bg-inherit ..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;/</span><span style="color:#7EE787">tw-badge</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">        </span></span></code></pre>`;

	//   async ngAfterViewInit(): Promise<void> {
	//     codeToHtml(`<!-- flat badge -->
	// <tw-badge size="xs" class="text-orange-500 bg-orange-500/10">Badge</tw-badge>

	// <!-- rounded badge with leading icon -->
	// <tw-badge size="xs" class="text-indigo-500 bg-indigo-500/10 rounded-full">
	//   <tw-icon name="dot" size="xs" />
	//   Badge
	// </tw-badge>

	// <!-- badge with trailling icon -->
	// <tw-badge size="xs" class="text-orange-500 bg-orange-500/10">
	//   Badge
	//   <tw-icon name="x-mark" size="xs" class="cursor-pointer hover:bg-inherit hover:bg-opacity-20" />
	// </tw-badge>
	//         `, { lang: 'html', theme: 'github-dark-default' })
	//       .then((html) => this.templateUpdateHTML = html);
	//   }

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
