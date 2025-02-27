import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialogs-preview',
  templateUrl: './preview.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
  sanitizer = inject(DomSanitizer);
  p01 = 'dialogs-p01';
  p02 = 'dialogs-p02';
  p03 = 'dialogs-p03';
  p04 = 'dialogs-p04';
  p05 = 'dialogs-p05';
  p06 = 'dialogs-p06';
  p07 = 'dialogs-p07';

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
