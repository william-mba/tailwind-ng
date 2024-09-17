import { Component, Input } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'demo-code-snippet',
  host: {
    '(click)': 'changeLabel()'
  },
  template: `
  <details>
    <summary class="relative h-5 my-2 border-neutral-300 dark:border-neutral-700 list-none px-2 font-mono text-xs cursor-pointer">
      <span *ngIf="displayLabel" class="absolute top-0.5 right-2">{{ label }}</span>
    </summary>
    <div class="relative">
      <tw-button size="lg" [icon]="true" variant="text" class="absolute right-0.5 font-mono text-white/80 hover:text-white" (click)="copy()">
        {{ displayText }}
        <tw-icon source="googlefonts" name="content-copy" />
      </tw-button>
    </div>
    <pre class="*:text-sm *:rounded-xl *:border *:border-black/[.10] *:dark:border-white/[.10]"><code [highlight]="code" [language]="lang">
      </code></pre>
  </details>`
})
export class CodeSnippetComponent {
  private text = {
    copy: '',
    copied: 'Copied!'
  };
  protected displayText = this.text.copy;
  protected label = 'View code';

  @Input() displayLabel = true;
  @Input() code!: string;
  @Input() lang: 'html' | 'ts' | 'js' | 'json' = 'html';

  changeLabel() {
    if (!this.displayLabel) return;
    this.label = this.label.charAt(0) === 'V' ? 'Hide code' : 'View code';
  }

  copy() {
    if (!this.code || this.displayText === this.text.copied) return;

    navigator.clipboard.writeText(this.code);

    this.displayText = this.text.copied;

    timer(5000).pipe(concatMap(() => {
      return scheduled(this.displayText, asyncScheduler)
    })).subscribe(() => this.displayText = this.text.copy);
  }
}
