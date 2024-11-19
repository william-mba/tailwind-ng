import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  template: `<code class="rounded-full font-mono text-sm text-nowrap text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-slate-800/50 p-1 px-2.5 font-medium">
    <ng-content />
  </code>`
})
export class CodeComponent {}
