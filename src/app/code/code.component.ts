import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  template: `<code class="font-mono text-sm text-nowrap text-black/70 dark:text-white/70 bg-black/5 dark:bg-white/5 rounded-sm p-1 px-2.5 font-medium">
    <ng-content />
  </code>`,
})
export class CodeComponent {

}
