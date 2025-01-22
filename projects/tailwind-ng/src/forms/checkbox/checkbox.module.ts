import { NgModule } from "@angular/core";
import { InputCheckboxDirective } from "./input-checkbox.directive";
import { CheckboxComponent } from "./checkbox.component";

@NgModule({
  imports: [CheckboxComponent, InputCheckboxDirective],
  exports: [CheckboxComponent, InputCheckboxDirective],
})
export class CheckboxModule { }
