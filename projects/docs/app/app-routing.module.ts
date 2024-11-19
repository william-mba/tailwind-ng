import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { ButtonsDemoComponent } from './demos/buttons-demo/buttons-demo.component';
import { ButtonGroupDemoComponent } from './demos/button-group-demo/button-group-demo.component';
import { DropdownDemoComponent } from './demos/dropdown-demo/dropdown-demo.component';
import { BadgeDemoComponent } from './demos/badge-demo/badge-demo.component';
import { AvatarDemoComponent } from './demos/avatar-demo/avatar-demo.component';
import { ModalDialogDemoComponent } from './demos/modal-dialog-demo/modal-dialog-demo.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LabComponent } from './demos/lab/lab.component';
import { ComboboxDemoComponent } from './demos/combobox-demo/combobox-demo.component';
import { TypographyDemoComponent } from './demos/typography-demo/typography-demo.component';
import { ToggleDemoComponent } from './demos/toggle-demo/toggle-demo.component';
import { Title } from '@angular/platform-browser';
import { InputDemoComponent } from './demos/input-demo/input-demo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';

const routes: Routes = [
  {
    path: 'quick-start',
    title: 'Quick Start Guide',
    component: QuickStartComponent
  },
  {
    path: 'comboboxes',
    title: 'Comboboxes',
    component: ComboboxDemoComponent,
  },
  {
    path: 'modal-dialogs',
    title: 'Modal Dialogs',
    component: ModalDialogDemoComponent,
  },
  {
    path: 'avatars',
    title: 'Avatars',
    component: AvatarDemoComponent,
  },
  {
    path: 'badges',
    title: 'Badges',
    component: BadgeDemoComponent,
  },
  {
    path: 'dropdowns',
    title: 'Dropdowns',
    component: DropdownDemoComponent,
  },
  {
    path: 'button-groups',
    title: 'Button Groups',
    component: ButtonGroupDemoComponent,
  },
  {
    path: 'buttons',
    title: 'Buttons',
    component: ButtonsDemoComponent,
  },
  {
    path: 'roadmap',
    title: 'Roadmap',
    component: RoadmapComponent,
  },
  {
    path: 'lab',
    component: LabComponent,
  },
  {
    path: 'typography',
    title: 'Typography',
    component: TypographyDemoComponent,
  },
  {
    path: 'toggles',
    title: 'Toggles',
    component: ToggleDemoComponent,
  },
  {
    path: 'input-groups',
    title: 'Input Groups',
    component: InputDemoComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: 'roadmap',
  },
];

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      if (title === 'Roadmap') {
        return this.title.setTitle(
          `${title} of Tailwind CSS Components for Angular Applications`
        );
      }
      return this.title.setTitle(
        `NGxTW ${title} - Tailwind CSS ${title} Components for Angular Applications`
      );
    }
    this.title.setTitle(
      'NGxTW - Ultimate Tailwind CSS components library for Angular.'
    );
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
  ],
})
export class AppRoutingModule { }
