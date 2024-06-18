import { Component, inject } from '@angular/core';
import { CustomDropdownConfig, CustomDropdownConfig2, CustomDropdownConfig3 } from 'customs/dropdown.config';
import { CustomPrimaryButtonConfig, CustomPrimaryButtonConfig2, CustomPrimaryButtonConfig3 } from 'customs/primary-button.config';
import { CustomSoftButtonConfig, CustomSoftButtonConfig2, CustomSoftButtonConfig3 } from 'customs/soft-button.config';
import { ConfigService, PrimaryButtonConfigKey, PrimaryButtonConfig, ToggleTheme, SoftButtonConfig, SoftButtonConfigKey, DropdownConfig, DropdownConfigKey } from 'ngx-twcss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  private primaryBtnConfig = inject(ConfigService<PrimaryButtonConfig>);
  private softBtnConfig = inject(ConfigService<SoftButtonConfig>);
  private dropdownConfig = inject(ConfigService<DropdownConfig>);
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
        this.dropdownConfig.set(DropdownConfigKey, DropdownConfig, CustomDropdownConfig);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.primaryBtnConfig.set(PrimaryButtonConfigKey, PrimaryButtonConfig, CustomPrimaryButtonConfig2);
        this.softBtnConfig.set(SoftButtonConfigKey, SoftButtonConfig, CustomSoftButtonConfig2);
        this.dropdownConfig.set(DropdownConfigKey, DropdownConfig, CustomDropdownConfig2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.primaryBtnConfig.set(PrimaryButtonConfigKey, PrimaryButtonConfig, CustomPrimaryButtonConfig3);
        this.softBtnConfig.set(SoftButtonConfigKey, SoftButtonConfig, CustomSoftButtonConfig3);
        this.dropdownConfig.set(DropdownConfigKey, DropdownConfig, CustomDropdownConfig3);
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
