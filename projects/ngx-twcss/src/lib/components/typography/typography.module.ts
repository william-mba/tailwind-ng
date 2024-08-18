import { NgModule } from '@angular/core';
import { H1 } from './h1/h1.directive';
import { H2 } from './h2/h2.directive';
import { H3 } from './h3/h3.directive';
import { H4 } from './h4/h4.directive';

@NgModule({
  declarations: [],
  imports: [H1, H2, H3, H4],
  exports: [H1, H2, H3, H4]
})
export class Typography { }
