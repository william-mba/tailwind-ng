export const BUTTON_DEMO_SAMPLE = {
  quick_start_guide: `// Import from ngxtw
import { ButtonComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    ButtonComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<button tw-button ...> Click me </button>\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<button tw-button class="rounded-full"> Hire me! </button>`,
  component_instance_customization: `// Import from ngxtw
import { Button } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#button'
  template: \`<button tw-button #button size="xs" ...\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('button', { static: true }) button!: Button;

  exampleMethod() {
    this.button.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideButtonConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideButtonConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { ButtonConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<ButtonConfig>('Button', {
      ... // Set your customization here
    });
  }

}`,
  primary_button: `<button tw-button type="button" size="xs"> Button text </button>
<button tw-button type="button" size="sm"> Button text </button>
<button tw-button type="button" size="md"> Button text </button>
<button tw-button type="button" size="lg"> Button text </button>
<button tw-button type="button" size="xl"> Button text </button>`,
  secondary_button: `<tw-button size="xs" variant="secondary">Button text</tw-button>
<tw-button size="sm" variant="secondary">Button text</tw-button>
<tw-button size="md" variant="secondary">Button text</tw-button>
<tw-button size="lg" variant="secondary">Button text</tw-button>
<tw-button size="xl" variant="secondary">Button text</tw-button>`,
  tonal_button: `<tw-button size="xs" variant="tonal">Button text</tw-button>
<tw-button size="sm" variant="tonal">Button text</tw-button>
<tw-button size="md" variant="tonal">Button text</tw-button>
<tw-button size="lg" variant="tonal">Button text</tw-button>
<tw-button size="xl" variant="tonal">Button text</tw-button>`,
  text_button: `<tw-button size="xs" variant="text">Button text</tw-button>
<tw-button size="sm" variant="text">Button text</tw-button>
<tw-button size="md" variant="text">Button text</tw-button>
<tw-button size="lg" variant="text">Button text</tw-button>
<tw-button size="xl" variant="text">Button text</tw-button>`,
  icon_button: `The padding is increased by 0.5 for each size increment.

<!-- Text -->
<button type="button" tw-button size="xs" variant="text" class="p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" variant="text" class="p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" variant="text" class="p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" variant="text" class="p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" variant="text" class="p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>

<!-- Secondary -->
<button type="button" tw-button size="xs" variant="secondary" class="p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" variant="secondary" class="p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" variant="secondary" class="p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" variant="secondary" class="p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" variant="secondary" class="p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" variant="tonal" class="p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" variant="tonal" class="p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" variant="tonal" class="p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" variant="tonal" class="p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" variant="tonal" class="p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>

<!-- Primary -->
<button type="button" tw-button size="xs" class="p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" class="p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" class="p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" class="p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" class="p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>`,
  icon_button_with_text: `<!-- Text -->
<button type="button" tw-button size="sm" variant="text">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" variant="text">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" variant="text">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>

<!-- Secondary -->
<button type="button" tw-button size="sm" variant="secondary" >
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" variant="secondary" >
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" variant="secondary" >
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>

<!-- Tonal -->
<button type="button" tw-button size="sm" variant="tonal">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" variant="tonal">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" variant="tonal">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>

<!-- Primary -->
<button type="button" tw-button size="sm">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>`,
  fab: `<!-- Secondary -->
<button type="button" tw-button size="xs" fab="true" variant="secondary" class="p-1.5">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="secondary" class="p-2">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="secondary" class="p-2.5">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="secondary" class="p-3">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="secondary" class="p-3.5">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" fab="true" variant="tonal" class="p-1.5">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="tonal" class="p-2">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="tonal" class="p-2.5">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="tonal" class="p-3">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="tonal" class="p-3.5">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Primary -->
<button type="button" tw-button size="xs" fab="true" class="p-1.5">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" class="p-2">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" class="p-2.5">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" class="p-3">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" class="p-3.5">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>
</div>`,
  extented_fab: `<!-- Secondary -->
<button type="button" tw-button size="xs" fab="true" variant="secondary">
  <tw-icon size="xs" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="sm" fab="true" variant="secondary">
  <tw-icon size="sm" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" fab="true" variant="secondary">
  <tw-icon size="md" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" fab="true" variant="secondary">
  <tw-icon size="lg" key="language" source="heroicons" />
  Button text
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" fab="true" variant="tonal">
  <tw-icon size="xs" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="sm" fab="true" variant="tonal">
  <tw-icon size="sm" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" fab="true" variant="tonal">
  <tw-icon size="md" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" fab="true" variant="tonal">
  <tw-icon size="lg" key="language" source="heroicons" />
  Button text
</button>

<!-- Primary -->
<button type="button" tw-button fab="true" size="xs">
  <tw-icon size="xs" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button fab="true" size="sm">
  <tw-icon size="sm" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button fab="true" size="md">
  <tw-icon size="md" key="language" source="heroicons" />
  Button text
</button>
<button type="button" tw-button fab="true" size="lg">
  <tw-icon size="lg" key="language" source="heroicons" />
  Button text
</button>`,
  rounded_primary_button: `<tw-button class="rounded-full" size="xs">Button text</tw-button>
<tw-button class="rounded-full" size="sm">Button text</tw-button>
<tw-button class="rounded-full" size="md">Button text</tw-button>
<tw-button class="rounded-full" size="lg">Button text</tw-button>
<tw-button class="rounded-full" size="xl">Button text</tw-button>`,
  rounded_secondary_button: `<tw-button class="rounded-full" size="xs" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="sm" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="md" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="lg" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="xl" variant="secondary">Button text</tw-button>`,
  rounded_tonal_button: `<tw-button class="rounded-full" size="xs" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="sm" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="md" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="lg" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="xl" variant="tonal">Button text</tw-button>`,
  rounded_icon_button: `<!-- Secondary -->
<button type="button" tw-button size="xs" variant="secondary" class="rounded-full p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" variant="secondary" class="rounded-full p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" variant="secondary" class="rounded-full p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" variant="secondary" class="rounded-full p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" variant="secondary" class="rounded-full p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" variant="tonal" class="rounded-full p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" variant="tonal" class="rounded-full p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" variant="tonal" class="rounded-full p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" variant="tonal" class="rounded-full p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" variant="tonal" class="rounded-full p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>

<!-- Primary -->
<button type="button" tw-button size="xs" class="rounded-full p-1.5">
  <tw-icon size="xs" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="sm" class="rounded-full p-2">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="md" class="rounded-full p-2.5">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="lg" class="rounded-full p-3">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
</button>
<button type="button" tw-button size="xl" class="rounded-full p-3.5">
  <tw-icon size="xl" key="cloud-arrow-down" source="heroicons" />
</button>`,
  rounded_icon_button_with_text: `<!-- Secondary -->
<button type="button" tw-button size="sm" variant="secondary">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" variant="secondary">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" variant="secondary">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>

<!-- Tonal -->
<button type="button" tw-button size="sm" variant="tonal" class="rounded-full">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" variant="tonal" class="rounded-full">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" variant="tonal" class="rounded-full">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>

<!-- Primary -->
<button type="button" tw-button size="sm" class="rounded-full">
  <tw-icon size="sm" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="md" class="rounded-full">
  <tw-icon size="md" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>
<button type="button" tw-button size="lg" class="rounded-full">
  <tw-icon size="lg" key="cloud-arrow-down" source="heroicons" />
  Button text
</button>`,
  rounded_fab: `<!-- Secondary -->
<button type="button" tw-button size="xs" fab="true" variant="secondary" class="p-1.5 rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="secondary" class="p-2 rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="secondary" class="p-2.5 rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="secondary" class="p-3 rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="secondary" class="p-3.5 rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" fab="true" variant="tonal" class="p-1.5 rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="tonal" class="p-2 rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="tonal" class="p-2.5 rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="tonal" class="p-3 rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="tonal" class="p-3.5 rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Primary -->
<button type="button" tw-button size="xs" fab="true" class="p-1.5 rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" class="p-2 rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" class="p-2.5 rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" class="p-3 rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" class="p-3.5 rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>
</div>`,
  rounded_extended_fab: `<!-- Secondary -->
<button type="button" tw-button size="xs" fab="true" variant="secondary" class="rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="secondary" class="rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="secondary" class="rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="secondary" class="rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="secondary" class="rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Tonal -->
<button type="button" tw-button size="xs" fab="true" variant="tonal" class="rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" variant="tonal" class="rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" variant="tonal" class="rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" variant="tonal" class="rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" variant="tonal" class="rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>

<!-- Primary -->
<button type="button" tw-button size="xs" fab="true" class="rounded-full">
  <tw-icon size="xs" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="sm" fab="true" class="rounded-full">
  <tw-icon size="sm" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="md" fab="true" class="rounded-full">
  <tw-icon size="md" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="lg" fab="true" class="rounded-full">
  <tw-icon size="lg" key="language" source="heroicons" />
</button>
<button type="button" tw-button size="xl" fab="true" class="rounded-full">
  <tw-icon size="xl" key="language" source="heroicons" />
</button>
</div>`,
}
