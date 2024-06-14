import { Component, inject } from '@angular/core';
import { CustomDropdownContentConfig, CustomDropdownContentConfig2, CustomDropdownContentConfig3 } from 'customs/dropdown-content.config';
import { CustomPrimaryButtonConfig, CustomPrimaryButtonConfig2, CustomPrimaryButtonConfig3 } from 'customs/primary-button.config';
import { CustomSoftButtonConfig, CustomSoftButtonConfig2, CustomSoftButtonConfig3 } from 'customs/soft-button.config';
import { ConfigService, PrimaryButtonConfigKey, PrimaryButtonConfig, ToggleTheme, SoftButtonConfig, SoftButtonConfigKey, DropdownContentConfig, DropdownContentConfigKey } from 'ngx-twcss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  private primaryBtnConfig = inject(ConfigService<PrimaryButtonConfig>);
  private softBtnConfig = inject(ConfigService<SoftButtonConfig>);
  private dropdownContentConfig = inject(ConfigService<DropdownContentConfig>);
  theme: number = 0;
  title = 'Ngx-Twcss Playground';
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
        this.primaryBtnConfig.set(PrimaryButtonConfigKey, PrimaryButtonConfig, CustomPrimaryButtonConfig);
        this.softBtnConfig.set(SoftButtonConfigKey, SoftButtonConfig, CustomSoftButtonConfig);
        this.dropdownContentConfig.set(DropdownContentConfigKey, DropdownContentConfig, CustomDropdownContentConfig);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.primaryBtnConfig.set(PrimaryButtonConfigKey, PrimaryButtonConfig, CustomPrimaryButtonConfig2);
        this.softBtnConfig.set(SoftButtonConfigKey, SoftButtonConfig, CustomSoftButtonConfig2);
        this.dropdownContentConfig.set(DropdownContentConfigKey, DropdownContentConfig, CustomDropdownContentConfig2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.primaryBtnConfig.set(PrimaryButtonConfigKey, PrimaryButtonConfig, CustomPrimaryButtonConfig3);
        this.softBtnConfig.set(SoftButtonConfigKey, SoftButtonConfig, CustomSoftButtonConfig3);
        this.dropdownContentConfig.set(DropdownContentConfigKey, DropdownContentConfig, CustomDropdownContentConfig3);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
    }
  }

  setRose() {
    this.theme = 1;
    this.changeConfig();
  }
  setOrange() {
    this.theme = 2;
    this.changeConfig();
  }
  setLime() {
    this.theme = 3;
    this.changeConfig();
  }

  reset() {
    localStorage.removeItem('last-used-theme');
    location.reload();
  }
}
