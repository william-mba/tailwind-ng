import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal-dialog-demo',
  templateUrl: './modal-dialog-demo.component.html'
})
export class ModalDialogDemoComponent {
  open: boolean = false;

  openClose() {
    this.open = !this.open;
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = true;
  }
}
