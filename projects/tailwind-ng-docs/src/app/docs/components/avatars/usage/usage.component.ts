import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
  selector: 'app-usage',
  imports: [],
  templateUrl: './usage.component.html',
  styles: ``
})
export class UsageComponent {

  private readonly sanitizer = inject(DomSanitizer);
  componentsImportsHTML = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.component.ts</span></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { TwAvatar } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">@</span><span style="color:#D2A8FF">Component</span><span style="color:#E6EDF3">({</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-gray-800/60" style="color:#E6EDF3">  imports: [TwAvatar],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> class</span><span style="color:#FFA657"> MyAwesomeComponent</span><span style="color:#E6EDF3"> {}</span></span></code></pre>`;
  templateUpdateHTML = `<pre class="shiki github-dark-default border border-gray-950/5 dark:border-white/10 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span class="line"><span style="color:#8B949E">&lt;!-- my-awesome.component.html --&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with image --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> tw-avatar</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder icon --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#79C0FF"> tw-icon</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"user"</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with placeholder initials --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-avatar</span><span style="color:#E6EDF3">&gt; TW &lt;/</span><span style="color:#7EE787">tw-avatar</span><span style="color:#E6EDF3">&gt;</span></span>
<code><span class="line"></span>
<span class="line"><span style="color:#8B949E">&lt;!-- avatar with top notification --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"relative"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">img</span><span style="color:#79C0FF"> tw-avatar</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"sm"</span><span style="color:#79C0FF"> alt</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">""</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">tw-badge</span><span style="color:#79C0FF"> size</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"sm"</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"absolute top-0 right-0 ..."</span><span style="color:#E6EDF3"> /&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  </span></span></code></pre>`;

  // async ngAfterViewInit(): Promise<void> {
  //       codeToHtml(`
  //   <div class="relative">
  //     <img tw-avatar size="sm" alt="" src="..." />
  //     <tw-badge size="sm" class="absolute top-0 right-0 ..." />
  //   </div>
  //     `, { lang: 'html', theme: 'github-dark-default' })
  //         .then((html) => this.templateUpdateHTML = html);
  // }

  protected trust(content: string): string {
    return this.sanitizer.bypassSecurityTrustHtml(content) as string;
  }

  copyRec: Record<string, boolean> = {};

  copy(content: string, key: string): void {
    if (!this.copyRec[key]) {
      navigator.clipboard.writeText(content);
      this.copyRec[key] = true;
      timer(3000).subscribe(() => this.copyRec[key] = false);
    }
  }
}
