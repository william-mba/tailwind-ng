import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialogs-preview',
  templateUrl: './preview.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
  opened = {
    1: signal(false),
    2: signal(false),
    3: signal(false),
    4: signal(false),
    5: signal(false),
  }
}
