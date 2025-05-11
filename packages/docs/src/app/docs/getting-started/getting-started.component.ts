import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core'
import { TwButton, TwDialog, TwIcon } from 'tailwind-ng'
import { DomSanitizer } from '@angular/platform-browser'
import { timer } from 'rxjs'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-getting-started',
  imports: [TwIcon, TwDialog, TwButton, RouterLink],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 500)
  }
  private readonly sanitizer = inject(DomSanitizer)

  npmCode = `npm install tailwind-ng @tailwind-ng/core `
  yarnCode = `yarn add tailwind-ng @tailwind-ng/core `
  pnpmCode = `pnpm add tailwind-ng @tailwind-ng/core `
  npmHTML = `<pre class="shiki github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">npm</span><span style="color:#A5D6FF"> install</span><span style="color:#A5D6FF"> tailwind-ng @tailwind-ng/core </span></span></code></pre>`
  yarnHTML = `<pre class="shiki github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">yarn</span><span style="color:#A5D6FF"> add</span><span style="color:#A5D6FF"> tailwind-ng @tailwind-ng/core </span></span></code></pre>`
  pnpmHTML = `<pre class="shiki github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#FFA657">pnpm</span><span style="color:#A5D6FF"> add</span><span style="color:#A5D6FF"> tailwind-ng @tailwind-ng/core </span></span></code></pre>`
  componentsImportsHTML = `<pre class="shiki github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">// my-awesome.component.ts</span></span>
<span class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { TwButton, provideButton } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'tailwind-ng'</span><span style="color:#E6EDF3">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6EDF3">@</span><span style="color:#D2A8FF">Component</span><span style="color:#E6EDF3">({</span></span>
<span class="line"><span style="color:#E6EDF3">  selector: </span><span style="color:#A5D6FF">'my-awesome-component'</span><span style="color:#E6EDF3">,</span></span>
<span class="line"><span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-white/5" style="color:#E6EDF3">  providers: [provideButton()],</span></span>
<span class="line"><span class="absolute inset-x-0 border-l-8 border-white/15 bg-white/10 dark:bg-white/5" style="color:#E6EDF3">  imports: [TwButton],</span></span>
<span class="line"><span style="color:#FF7B72">  ...</span></span>
<span class="line"><span style="color:#E6EDF3">}) </span><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> class</span><span style="color:#FFA657"> MyAwesomeComponent</span><span style="color:#E6EDF3"> {}</span></span></code></pre>`
  templateUpdateHTML = `<pre class="shiki github-dark-default border dark:border-gray-800 overflow-x-auto bg-black/90! dark:bg-gray-800/40! mb-6 relative p-2 rounded-md" style="background-color:#0d1117;color:#e6edf3" tabindex="0"><code><span class="line"><span style="color:#8B949E">&lt;!-- my-awesome.component.html --&gt;</span></span>
<span class="line"><span style="color:#E6EDF3">&lt;</span><span style="color:#7EE787">tw-button</span><span style="color:#E6EDF3">&gt;Click me!&lt;/</span><span style="color:#7EE787">tw-button</span><span style="color:#E6EDF3">&gt;</span></span></code></pre>`

  // async ngAfterViewInit(): Promise<void> {
  //   // const { codeToHtml } = import('shiki');
  //   // this.withNpm = codeToHtml(this.withNpm, { lang: 'sh', theme: 'github-dark-default' });
  // }

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
