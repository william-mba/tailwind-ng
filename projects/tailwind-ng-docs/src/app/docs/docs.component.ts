import { Component } from '@angular/core';
import { ButtonComponent, DropdownComponent, IconDirective } from 'tailwind-ng';
import { OptionDirective, ThemeHelper } from '@tailwind-ng/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-docs',
  imports: [NgIf, IconDirective, DropdownComponent, ButtonComponent, OptionDirective],
  templateUrl: './docs.component.html',
  styles: ``
})
export class DocsComponent {

  releaseTag = {
    active: 'latest',
    options: [
      { value: 'latest', label: 'Latest' },
      { value: 'next', label: 'Next' },
      { value: 'dev', label: 'Dev' },
    ]
  };

  updateTag(value: string) {
    this.releaseTag.active = value;
  }
  protected readonly theme = ThemeHelper;
  switchTheme() {
    this.theme.toggle();
  }

}
