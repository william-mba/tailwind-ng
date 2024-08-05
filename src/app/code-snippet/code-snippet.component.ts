import { Component, Input } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'demo-code-snippet',
  template: `
  <details>
    <summary class="border-x border-b border-neutral-300 dark:border-neutral-700 list-none px-2 font-mono text-sm cursor-pointer">
      {{ label }}
    </summary>
    <div class="relative">
      <tw-button size="sm" variant="text" className="absolute -right-2 -top-6 font-mono" (click)="copy()">
        {{ displayText }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M379.78-233.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-466.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h346.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v466.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H379.78Zm-186 186q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-572.44h106v572.44h452.44v106H193.78Z"/>
        </svg>
      </tw-button>
    </div>
    <pre class="*:text-sm *:rounded-b-xl *:border *:border-t-0 *:border-black/[.10] *:dark:border-white/[.10]"><code [highlight]="code" language="html">
      </code></pre>
  </details>`
})
export class CodeSnippetComponent {
  private text = {
    copy: 'Copy',
    copied: 'Copied!'
  };
  protected displayText = this.text.copy;
  protected label = '</> Code';

  @Input() code!: string;


  copy() {
    if (!this.code || this.displayText === this.text.copied) return;

    navigator.clipboard.writeText(this.code);

    this.displayText = this.text.copied;

    timer(5000).pipe(concatMap(() => {
      return scheduled(this.displayText, asyncScheduler)
    })).subscribe(() => this.displayText = this.text.copy);
  }
}
