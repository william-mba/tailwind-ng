import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Badge, Group, DropdownModule, Button, FAB, Avatar, Tooltip, ModalDialogModule, BadgeAction, Icon } from 'ngx-twcss';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';
import { BadgeDemoComponent } from './demos/badge-demo/badge-demo.component';
import { AvatarDemoComponent } from './demos/avatar-demo/avatar-demo.component';
import { MenuComponent } from './menu/menu.component';

import {
  provideHighlightOptions,
  Highlight,
  HighlightAuto,
} from 'ngx-highlightjs';
import 'highlight.js/styles/github.min.css';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsDemoComponent,
    ButtonGroupDemoComponent,
    DropdownDemoComponent,
    BadgeDemoComponent,
    AvatarDemoComponent,
    MenuComponent,
    CodeSnippetComponent
  ],
  imports: [
    Highlight, HighlightAuto,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Button,
    FAB,
    Icon,
    Group,
    DropdownModule,
    Badge,
    BadgeAction,
    Avatar,
    Tooltip,
    ModalDialogModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    })
  ],
})
export class AppModule { }
