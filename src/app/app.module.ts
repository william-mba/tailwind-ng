import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent, SecondaryButtonComponent } from 'ngx-twcss';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
