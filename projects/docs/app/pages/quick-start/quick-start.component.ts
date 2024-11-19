import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styles: ``
})
export class QuickStartComponent {
  file_to_update = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/ngxtw/**/*.{html,ts}" // Add this line
    ...
  ],
  ...
};`;

  form_plugin = `module.exports = {
  ...
  plugins: [
    require('@tailwindcss/forms') // Add this line
  ]
}`

  copy(value: string) {
    navigator.clipboard.writeText(value);
  }
}
