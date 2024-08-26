import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Badge, ButtonGroup, Dropdown, Button, Avatar, ModalDialog, BadgeAction, Combobox, Icon, Typography, Toggle, provideButtonConfig, provideDropdownConfig, provideAvatarConfig, provideBadgeConfig, provideButtonGroupConfig, provideComboboxConfig, provideComboboxItemConfig, ComboboxItem } from 'ngx-twcss';
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
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { ModalDialogDemoComponent } from './demos/modal-dialog-demo/modal-dialog-demo.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LabComponent } from './demos/lab/lab.component';
import { FormsModule } from '@angular/forms';
import { ComboboxDemoComponent } from './demos/combobox-demo/combobox-demo.component';
import { TypographyDemoComponent } from './demos/typography-demo/typography-demo.component';
import { ToggleDemoComponent } from './demos/toggle-demo/toggle-demo.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsDemoComponent,
    ButtonGroupDemoComponent,
    DropdownDemoComponent,
    BadgeDemoComponent,
    AvatarDemoComponent,
    ModalDialogDemoComponent,
    MenuComponent,
    CodeSnippetComponent,
    RoadmapComponent,
    LabComponent,
    ComboboxDemoComponent,
    TypographyDemoComponent,
    ToggleDemoComponent,
    CodeComponent
  ],
  imports: [
    Highlight,
    HighlightAuto,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    Button,
    ButtonGroup,
    Dropdown,
    Badge,
    BadgeAction,
    Avatar,
    ModalDialog,
    Combobox,
    ComboboxItem,
    Icon,
    Typography,
    Toggle
  ],
  bootstrap: [AppComponent],
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideAvatarConfig(),
    provideBadgeConfig(),
    provideButtonGroupConfig(),
    provideButtonConfig(),
    provideComboboxConfig(),
    provideComboboxItemConfig(),
    provideDropdownConfig(),
  ],
})
export class AppModule { }
