import { Component, Input } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'demo-code-snippet',
  template: `
  <details class="relative">
    <summary
      class="border-l-8 border-r border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 list-none px-2 font-mono text-sm cursor-pointer">
      <> Code
    </summary>
    <tw-button (click)="copy()" variant="text" tw-icon size="sm" className="absolute right-1 top-0 p-0.5">
      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
          d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
      </svg>
      {{ text }}
    </tw-button>
    <pre class="*:text-xs *:rounded-b-xl *:border"><code [highlight]="code" language="html">
      </code></pre>
  </details>`
})
export class CodeSnippetComponent {
  @Input() code!: string;
  protected text = 'Copy';

  copy() {
    if (!this.code || this.text === 'Copied!') return;

    navigator.clipboard.writeText(this.code);

    this.text = 'Copied!';

    timer(5000).pipe(concatMap(() => {
      return scheduled(this.text, asyncScheduler)
    })).subscribe(() => this.text = 'Copy');
  }
}
