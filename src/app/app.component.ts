import { Component, inject } from '@angular/core';
import { CustomButtonConfig, CustomButtonConfig2, CustomButtonConfig3 } from 'customs/button.config';
import { CustomDropdownConfig, CustomDropdownConfig2, CustomDropdownConfig3 } from 'customs/dropdown.config';
import { ConfigService, DropdownConfig, DropdownConfigKey, ButtonConfig, ButtonConfigKey, ToggleTheme } from 'ngx-twcss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  private buttonConfig = inject(ConfigService<ButtonConfig>);
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
    ToggleTheme();
  }

  changeConfig() {
    switch (this.theme) {
      case 1:
        this.buttonConfig.set(ButtonConfigKey, ButtonConfig, CustomButtonConfig);
        this.dropdownConfig.set(DropdownConfigKey, DropdownConfig, CustomDropdownConfig);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.buttonConfig.set(ButtonConfigKey, ButtonConfig, CustomButtonConfig2);
        this.dropdownConfig.set(DropdownConfigKey, DropdownConfig, CustomDropdownConfig2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.buttonConfig.set(ButtonConfigKey, ButtonConfig, CustomButtonConfig3);
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
