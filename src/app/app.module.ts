import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroup, Dropdown, DropdownItem, PrimaryButton, SecondaryButton, SoftButton } from 'ngx-twcss';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsDemoComponent,
    ButtonGroupDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimaryButton,
    SecondaryButton,
    SoftButton,
    ButtonGroup,
    Dropdown,
    DropdownItem
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
