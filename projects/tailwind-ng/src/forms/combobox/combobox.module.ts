import { NgModule } from '@angular/core';
import { ComboboxComponent } from './combobox.component';
import { ComboboxItemComponent } from './combobox-item/combobox-item.component';

@NgModule({
	imports: [ComboboxComponent, ComboboxItemComponent],
	exports: [ComboboxComponent, ComboboxItemComponent],
})
export class ComboboxModule {}
