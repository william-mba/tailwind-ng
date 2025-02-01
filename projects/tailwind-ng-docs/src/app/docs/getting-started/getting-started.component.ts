import { AfterViewInit, Component, inject } from '@angular/core';
import { DialogModule, IconDirective } from 'tailwind-ng';
import { codeToHtml } from 'shiki';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
  selector: 'app-getting-started',
  imports: [IconDirective, DialogModule],
  templateUrl: './getting-started.component.html',
  styles: ``
})
export class GettingStartedComponent implements AfterViewInit {
  private readonly sanitizer = inject(DomSanitizer);

  withNpm = `npm install tailwind-ng`;
  withYarn = `yarn add tailwind-ng`;
  withPnpm = `pnpm add tailwind-ng`;
  componentsImports = `// my-awesome.component.ts
import { ButtonComponent } from 'tailwind-ng';

@Component({
  selector: 'my-awesome-component',
  imports: [ButtonComponent],
  ...
}) export class AwesomeComponent {}`;
  templateUpdate = `<!-- my-awesome.component.html -->
<tw-button>Click me!</tw-button>`;

  async ngAfterViewInit(): Promise<void> {
    this.withNpm = await codeToHtml(this.withNpm, { lang: 'sh', theme: 'github-dark-default' });
    this.withYarn = await codeToHtml(this.withYarn, { lang: 'sh', theme: 'github-dark-default' });
    this.withPnpm = await codeToHtml(this.withPnpm, { lang: 'sh', theme: 'github-dark-default' });
    this.componentsImports = await codeToHtml(this.componentsImports, { lang: 'ts', theme: 'github-dark-default' });
    this.templateUpdate = await codeToHtml(this.templateUpdate, { lang: 'html', theme: 'github-dark-default' });
  }

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
