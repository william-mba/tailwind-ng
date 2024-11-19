import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './sections/code-snippet/code-snippet.component';
import { CodeComponent } from './sections/code/code.component';
import { ButtonComponent, IconDirective, TypographyModule } from 'ngxtw';
import { CustomizationComponent } from './sections/customization/customization.component';
import { ConfigurationComponent } from './sections/configuration/configuration.component';
import { ApiRefLinksComponent } from './sections/api-ref-links/api-ref-links.component';
import { ApiRefComponent } from './sections/api-ref/api-ref.component';
import { HighlightComponent } from './highlight/highlight.component';

const sharedComponents = [
  CodeComponent,
  CodeSnippetComponent,
  CustomizationComponent,
  ConfigurationComponent,
  ApiRefLinksComponent,
  ApiRefComponent,
];

@NgModule({
  declarations: [sharedComponents],
  imports: [
    CommonModule,
    ButtonComponent,
    HighlightComponent,
    IconDirective,
    TypographyModule,
  ],
  exports: [sharedComponents]
})
export class SharedModule { }
