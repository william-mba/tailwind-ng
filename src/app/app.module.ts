import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from '../../projects/ngx-twcss/src/lib/components/buttons/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimaryButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
