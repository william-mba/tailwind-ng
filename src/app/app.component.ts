import { Component, inject } from '@angular/core';
import { CustomButtonConfig, CustomButtonConfig2, CustomButtonConfig3 } from 'customs/button.config';
import { CustomDropdownConfig, CustomDropdownConfig2, CustomDropdownConfig3 } from 'customs/dropdown.config';
import { ConfigService } from 'ngx-twcss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  private configService = inject(ConfigService);
  theme: number = 0;
  title = 'Ngx-Twcss Playground';
  nextThemeMode: 'light' | 'dark' = 'dark';

  ngOnInit() {
    let lastTheme = localStorage.getItem('last-used-theme');
    if (lastTheme) {
      this.theme = parseInt(lastTheme);
      this.setConfig();
    }
  }

  setConfig() {
    switch (this.theme) {
      case 1:
        this.configService.setButton(CustomButtonConfig)
          .setDropdown(CustomDropdownConfig);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 2:
        this.configService.setButton(CustomButtonConfig2)
          .setDropdown(CustomDropdownConfig2);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
      case 3:
        this.configService.setButton(CustomButtonConfig3)
          .setDropdown(CustomDropdownConfig3);
        localStorage.setItem('last-used-theme', `${this.theme}`);
        break;
    }
  }

  setRose() {
    this.theme = 1;
    this.setConfig();
  }
  setOrange() {
    this.theme = 2;
    this.setConfig();
  }
  setLime() {
    this.theme = 3;
    this.setConfig();
  }

  reset() {
    localStorage.removeItem('last-used-theme');
    location.reload();
  }
}
