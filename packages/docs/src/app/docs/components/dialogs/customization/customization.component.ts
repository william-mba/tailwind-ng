import { Component, inject } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { timer } from 'rxjs'

@Component({
  selector: 'app-dialogs-customization',
  imports: [],
  templateUrl: './customization.component.html',
  styles: ``,
})
export class CustomizationComponent {
  private readonly sanitizer = inject(DomSanitizer)
  configProviders = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.{component|module|app.config|app.component}.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { provideBadge } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">// Shortened for brevity...</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#FFA657">  providers</span><span style="color:#E6EDF3">: [</span></span>
<span class="line"><span style="color:#D2A8FF">    provideBadge</span><span style="color:#E6EDF3">({ </span><span style="color:#FF7B72">...</span><span style="color:#E6EDF3"> }),</span></span>
<span class="line"><span style="color:#FF7B72">    ...</span></span>
<span class="line"><span style="color:#8B949E">    // other provider such as</span></span>
<span class="line"><span style="color:#8B949E">    // provideElements({ badge: {...}}) or</span></span>
<span class="line"><span style="color:#8B949E">    // provideUI({ elements: { badge: {...}}}) can also be used here.</span></span>
<span class="line"><span style="color:#E6EDF3">  ],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`
  classAttribute = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- flat badge --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-orange-500 bg-orange-500/10"</span><span style="color:#E6EDF3">&gt;Badge&lt;/</span><span style="color:#7EE787">tw-badge</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- rounded badge with leading icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span class="bg-blue-400/20" style="color:#A5D6FF">"text-indigo-500 bg-indigo-500/10 rounded-full"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"dot"</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"xs"</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  Badge</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;/</span><span style="color:#7EE787">tw-badge</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"></span></code></pre>`

  protected trust(content: string): string {
    return this.sanitizer.bypassSecurityTrustHtml(content) as string
  }

  copyRec: Record<string, boolean> = {}

  copy(content: string, key: string): void {
    if (!this.copyRec[key]) {
      navigator.clipboard.writeText(content)
      this.copyRec[key] = true
      timer(3000).subscribe(() => (this.copyRec[key] = false))
    }
  }
}
