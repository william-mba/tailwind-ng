import { Component } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html'
})
export class ModalDialogDemoComponent {
  open: boolean = true;

  toggleDialog() {
    this.open = !this.open;

    timer(1000).pipe(concatMap(() => scheduled([this.open], asyncScheduler)))
      .subscribe(() => this.open = true)
  }

  cancel() {
    this.open = false;
  }
}
