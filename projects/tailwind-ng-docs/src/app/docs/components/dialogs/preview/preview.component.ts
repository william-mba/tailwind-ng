import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialogs-preview',
  templateUrl: './preview.component.html'
})
export class PreviewComponent {
  sanitizer = inject(DomSanitizer);
  p01 = this.sanitize('dialogs-p01');
  p02 = this.sanitize('dialogs-p02');
  p03 = this.sanitize('dialogs-p03');
  p04 = this.sanitize('dialogs-p04');
  p05 = this.sanitize('dialogs-p05');
  p06 = this.sanitize('dialogs-p06');
  p07 = this.sanitize('dialogs-p07');

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  opened = {
    1: signal(false),
    2: signal(false),
    3: signal(false),
    4: signal(false),
    5: signal(false),
  }
}
