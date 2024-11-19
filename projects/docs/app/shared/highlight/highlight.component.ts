import { NgIf } from '@angular/common';
import { afterNextRender, AfterRenderPhase, Component, ElementRef, Input, ViewChild } from '@angular/core';
import hljs from 'highlight.js/lib/core';

@Component({
  selector: 'highlight',
  standalone: true,
  imports: [NgIf],
  template: `
  <pre><code #highlight [class]="classList"><ng-container *ngIf="code; else content">{{ code }}</ng-container></code></pre>
  <ng-template #content><ng-content></ng-content></ng-template>
  `
})
export class HighlightComponent {
  @Input() code!: string;
  @Input() language: 'xml' | 'typescript' | 'json' = 'xml';
  @Input({ alias: 'class' })
  classList: string = 'pl-4 mt-1 text-sm rounded-xl border border-slate-300 dark:border-slate-700';

  @ViewChild('highlight', { static: true, read: ElementRef }) codeElement!: ElementRef<HTMLElement>;

  constructor(element: ElementRef<HTMLElement>) {
    afterNextRender(() => {
      hljs.highlightElement(this.codeElement.nativeElement);
      element.nativeElement.className = '';
    }, { phase: AfterRenderPhase.Write });
  }
}
