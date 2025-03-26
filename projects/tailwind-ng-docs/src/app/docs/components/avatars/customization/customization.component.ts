import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
	selector: 'app-avatars-customization',
	imports: [],
	templateUrl: './customization.component.html',
	styles: ``,
})
export class CustomizationComponent {
	private readonly sanitizer = inject(DomSanitizer);
	configProviders = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.{component|module|app.config|app.component}.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { provideAvatar } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">// Shortened for brevity...</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#FFA657">  providers</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#D2A8FF">    provideAvatar</span><span style="color:#E6EDF3">({ </span><span style="color:#FF7B72">...</span><span style="color:#E6EDF3"> }),</span></span>
<span class="line"><span style="color:#FF7B72">    ...</span></span>
<span class="line"><span style="color:#8B949E">    // other provider such as</span></span>
<span class="line"><span style="color:#8B949E">    // provideElements({ avatar: {...}}) or</span></span>
<span class="line"><span style="color:#8B949E">    // provideUI({ elements: { avatar: {...}}}) can also be used here.</span></span>
<span class="line"><span style="color:#E6EDF3">  ],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`;
	classAttribute = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- avatar with image --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"ring-2 ring-white"</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-slate-50 bg-slate-400"</span><span style="color:#79C0FF"> tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"user"</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder initials --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-lg text-slate-50 bg-slate-400"</span><span style="color:#E6EDF3">&gt; TW &lt;/</span><span style="color:#7EE787">tw-avatar</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span></code></pre>`;

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
