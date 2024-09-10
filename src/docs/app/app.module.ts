import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BadgeComponent,
  BadgeActionDirective,
  ButtonGroupComponent,
  DropdownComponent,
  ButtonComponent,
  AvatarDirective,
  ModalDialogModule,
  ComboboxModule,
  IconDirective,
  TypographyModule,
  ToggleComponent,
  InputTextComponent,
  provideButtonConfig,
  provideDropdownConfig,
  provideAvatarConfig,
  provideBadgeConfig,
  provideButtonGroupConfig,
  provideComboboxConfig,
  provideModalDialogConfig,
  provideIconConfig,
  provideToggleConfig,
  provideInputConfig
} from 'ngxtw';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
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
import { InputDemoComponent } from './demos/input-demo/input-demo.component';

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
    CodeComponent,
    InputDemoComponent
  ],
  imports: [
    Highlight,
    HighlightAuto,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonComponent,
    ButtonGroupComponent,
    DropdownComponent,
    BadgeComponent,
    BadgeActionDirective,
    AvatarDirective,
    ModalDialogModule,
    ComboboxModule,
    IconDirective,
    TypographyModule,
    ToggleComponent,
    InputTextComponent,
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
    provideDropdownConfig(),
    provideIconConfig(),
    provideToggleConfig(),
    provideModalDialogConfig(),
    provideInputConfig()
  ],
})
export class AppModule { }
