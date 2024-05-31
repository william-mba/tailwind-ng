import { Component, inject } from '@angular/core';
import { ConfigService, PrimaryButtonKey, PrimaryButtonConfig, ToggleTheme } from 'ngx-twcss';
import { CustomPrimaryButtonConfig, CustomPrimaryButtonConfig2, CustomPrimaryButtonConfig3 } from 'configs/ngx-twcss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'Ngx-Twcss Playground';
  private btnSettings = inject(ConfigService<PrimaryButtonConfig>);
  theme!: number;
  nextThemeMode: 'light' | 'dark' = 'dark';

  ngOnInit() {
    let lastTheme = localStorage.getItem('last-used-theme');
    if (lastTheme) {
      this.theme = parseInt(lastTheme);
      this.changeConfig();
    }
  }

  ToggleTheme() {
    ToggleTheme();
    this.nextThemeMode = this.nextThemeMode === 'light' ? 'dark' : 'light';
  }

  changeConfig() {
    switch (this.theme) {
      case 1:
        this.btnSettings.set(PrimaryButtonKey, PrimaryButtonConfig, CustomPrimaryButtonConfig);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.btnSettings.set(PrimaryButtonKey, PrimaryButtonConfig, CustomPrimaryButtonConfig2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.btnSettings.set(PrimaryButtonKey, PrimaryButtonConfig, CustomPrimaryButtonConfig3);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
    }
  }

  one() {
    this.theme = 1;
    this.changeConfig();
  }
  two() {
    this.theme = 2;
    this.changeConfig();
  }
  three() {
    this.theme = 3;
    this.changeConfig();
  }

  reset() {
    localStorage.removeItem('last-used-theme');
    location.reload();
  }
}
