import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import { ButtonComponent, DialogModule, IconDirective } from 'tailwind-ng';

@Component({
  selector: 'app-themes',
  imports: [IconDirective, DialogModule, ButtonComponent, RouterLink],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './themes.component.html',
})
export class ThemesComponent {
  private readonly sanitizer = inject(DomSanitizer);
  themesFromNPMCode = `import '@tailwind-ng/themes/default';`;
  themesFromNPMHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> '@tailwind-ng/themes/default';</span></span></code></pre>`;
  themesFromCDNCode = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwind-ng/themes@latest/default/style.css">`;
  themesFromCDNHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#E6EDF3">&lt;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> charset</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"utf-8"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">&gt;My Awesome Angular Application&lt;/</span><span style="color:#7EE787">title</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">base</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"/"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">meta</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"viewport"</span><span style="color:#79C0FF"> content</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"width=device-width, initial-scale=1"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-white/5" class="line"><span style="color:#E6EDF3">  &lt;</span><span style="color:#7EE787">link</span><span style="color:#79C0FF"> rel</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"stylesheet"</span><span style="color:#79C0FF"> href</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"https://cdn.jsdelivr.net/npm/@tailwind-ng/themes@latest/default/style.css"</span><span style="color:#E6EDF3">&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">  ...</span></span></code></pre>`;
  npmCode = `npm install @tailwind-ng/themes `;
  yarnCode = `yarn add @tailwind-ng/themes `;
  pnpmCode = `pnpm add @tailwind-ng/themes `;
  npmHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">npm</span><span style="color:#A5D6FF"> install</span><span style="color:#A5D6FF"> @tailwind-ng/themes </span></span></code></pre>`;
  yarnHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">yarn</span><span style="color:#A5D6FF"> add</span><span style="color:#A5D6FF"> @tailwind-ng/themes </span></span></code></pre>`;
  pnpmHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">pnpm</span><span style="color:#A5D6FF"> add</span><span style="color:#A5D6FF"> @tailwind-ng/themes </span></span></code></pre>`;
  componentsImportsHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.component.ts</span></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { ButtonComponent } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">@</span><span style="color:#D2A8FF">Component</span><span style="color:#E6EDF3">({</span></span>
<span class="line"><span style="color:#E6EDF3">  selector: </span><span style="color:#A5D6FF">'my-awesome-component'</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-white/5" style="color:#E6EDF3">  imports: [ButtonComponent],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> class</span><span style="color:#FFA657"> MyAwesomeComponent</span><span style="color:#E6EDF3"> {}</span></span></code></pre>`;
  templateUpdateHTML = `<pre class="shiki -z-10 github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- my-awesome.component.html --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-button</span><span style="color:#E6EDF3">&gt;Click me!&lt;/</span><span style="color:#7EE787">tw-button</span><span style="color:#E6EDF3">&gt;</span></span></code></pre>`;

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
