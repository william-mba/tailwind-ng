import { Component, inject } from '@angular/core';
import { SettingsManager } from '../../projects/ngx-twcss/src/public-api';
import { CustomPrimaryButtonSettings, CustomPrimaryButtonSettings2, CustomPrimaryButtonSettings3 } from './custom-settings/custom-primary-button.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Ngx-Twcss Playground';
  private settingsManager = inject(SettingsManager);
  theme!: number;

  ngOnInit() {
    let lastTheme = localStorage.getItem('last-used-theme');
    if (lastTheme) {
      this.theme = parseInt(lastTheme);
      this.changeSettings();
    }
  }

  changeSettings() {
    switch (this.theme) {
      case 1:
        this.settingsManager.setPrimaryButtonSettings(CustomPrimaryButtonSettings);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.settingsManager.setPrimaryButtonSettings(CustomPrimaryButtonSettings2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.settingsManager.setPrimaryButtonSettings(CustomPrimaryButtonSettings3);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
    }
  }

  one() {
    this.theme = 1;
    this.changeSettings();
  }
  two() {
    this.theme = 2;
    this.changeSettings();
  }
  three() {
    this.theme = 3;
    this.changeSettings();
  }

  reset() {
    localStorage.removeItem('last-used-theme');
    location.reload();
  }
}
