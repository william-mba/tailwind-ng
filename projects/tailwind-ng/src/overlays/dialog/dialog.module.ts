import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogContainerDirective } from './dialog-container.directive';

@NgModule({
	imports: [DialogComponent, DialogContainerDirective],
	exports: [DialogComponent, DialogContainerDirective],
})
export class DialogModule {}
