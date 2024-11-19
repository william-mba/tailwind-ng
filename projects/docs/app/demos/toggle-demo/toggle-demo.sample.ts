export const TOGGLE_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { ToggleComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    ToggleComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<tw-toggle class="has-[:checked]:bg-blue-600"/>\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<tw-toggle class="has-[:checked]:bg-blue-600"/>`,
  component_instance_customization: `// Import from ngxtw
import { Toggle } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#toggle'
  template: \`<tw-toggle #toggle ... />\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('toggle') toggle!: Toggle;

  exampleMethod() {
    this.toggle.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideToggleConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideToggleConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { ToggleConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<ToggleConfig>('Toggle', {
      ... // Set your customization here
    });
  }

}`,
  simpleToggle: `<tw-toggle class="has-[:checked]:bg-blue-600"/>
<tw-toggle class="w-16 ..."/>
<tw-toggle class="w-20 ..." />`,
  withOutline: `<tw-toggle class="has-[:checked]:bg-blue-600 ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-blue-600 active:ring-2 active:ring-blue-600" />
<tw-toggle class="w-16 ..." />
<tw-toggle class="w-20 ..." />`,
  withIcon: `<tw-toggle #toggle class="has-[:checked]:bg-blue-600 ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-blue-600 active:ring-offset-2 active:ring-2 active:ring-blue-600">
  <tw-icon *ngIf="toggle.checked" class="text-blue-600" size="xs" key="check" source="googlefonts" />
  <tw-icon *ngIf="!toggle.checked" class="text-gray-300" size="xs" key="close" source="googlefonts" />
</tw-toggle>`,
  simpleToggle2: `<tw-toggle [slider]="['rounded-sm']" class="rounded-sm has-[:checked]:bg-blue-600" />
<tw-toggle [slider]="['rounded-sm']" class="w-16 ..." />
<tw-toggle [slider]="['rounded-sm']" class="w-20 ..." />`,
  withOutline2: `<tw-toggle [slider]="['rounded-sm']" class="rounded-sm has-[:checked]:bg-blue-600 ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-blue-600 active:ring-offset-2 active:ring-2 active:ring-blue-600" />
<tw-toggle [slider]="['rounded-sm']" class="w-16 ..." />
<tw-toggle [slider]="['rounded-sm']" class="w-20 ..." />
`,
  withIcon2: `<tw-toggle #toggle [slider]="['rounded-sm']" class="rounded-sm has-[:checked]:bg-blue-600 ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-blue-600 active:ring-offset-2 active:ring-2 active:ring-blue-600">
  <tw-icon *ngIf="toggle.checked" class="text-blue-600" size="xs" key="check" source="googlefonts" />
  <tw-icon *ngIf="!toggle.checked" class="text-gray-300" size="xs" key="close" source="googlefonts" />
</tw-toggle>`
};
