import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-configuration',
  template: `<div id="configuration" class="h-16"></div>
    <tw-h3> {{ title }} </tw-h3>
    <p>{{ subtitle }}</p>
    <highlight [code]="config | json" />`,
})
export class ConfigurationComponent {
  @Input() config: Record<string, {}> | null= {};
  @Input() title: string = 'Configuration';
  @Input() subtitle: string = 'Default configuration';
}
