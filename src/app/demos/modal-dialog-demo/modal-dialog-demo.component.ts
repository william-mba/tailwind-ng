import { Component } from '@angular/core';
import { asyncScheduler, concatMap, scheduled, timer } from 'rxjs';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html'
})
export class ModalDialogDemoComponent {

  open(key: number) {
    return this.dialogsStates[key];
  };

  dialogsStates: Record<number, boolean> = {};

  toggleDialog(key: number) {
    this.dialogsStates[key] = !this.dialogsStates[key];

    timer(1000).pipe(concatMap(() => {
      return scheduled([this.dialogsStates[key]], asyncScheduler)
    })).subscribe(() => this.dialogsStates[key] = true)
  }

  close(key: number) {
    this.dialogsStates[key] = false;
  }
}
