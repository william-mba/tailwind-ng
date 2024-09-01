import { NgModule } from "@angular/core";
import { ComboboxComponent } from "./combobox.component";
import { ComboboxItemComponent } from "./combobox-item/combobox-item.component";
import { provideComboboxConfig } from "./combobox.config";

@NgModule({
  imports: [ComboboxComponent, ComboboxItemComponent],
  exports: [ComboboxComponent, ComboboxItemComponent],
  providers: [
    provideComboboxConfig()
  ]
})
export class ComboboxModule { }
