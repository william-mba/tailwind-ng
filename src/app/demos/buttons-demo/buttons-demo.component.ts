import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-demo',
  templateUrl: './buttons-demo.component.html',
  styles: ``
})
export class ButtonsDemoComponent {
  copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  primaryButton = `<tw-button size="xs">Button text</tw-button>
<tw-button size="sm">Button text</tw-button>
<tw-button size="md">Button text</tw-button>
<tw-button size="lg">Button text</tw-button>
<tw-button size="xl">Button text</tw-button>`;

  secondaryButton = `<tw-button size="xs" variant="secondary">Button text</tw-button>
<tw-button size="sm" variant="secondary">Button text</tw-button>
<tw-button size="md" variant="secondary">Button text</tw-button>
<tw-button size="lg" variant="secondary">Button text</tw-button>
<tw-button size="xl" variant="secondary">Button text</tw-button>`;

  tonalButton = `<tw-button size="xs" variant="tonal">Button text</tw-button>
<tw-button size="sm" variant="tonal">Button text</tw-button>
<tw-button size="md" variant="tonal">Button text</tw-button>
<tw-button size="lg" variant="tonal">Button text</tw-button>
<tw-button size="xl" variant="tonal">Button text</tw-button>`;

  textButton = `<tw-button size="xs" variant="text">Button text</tw-button>
<tw-button size="sm" variant="text">Button text</tw-button>
<tw-button size="md" variant="text">Button text</tw-button>
<tw-button size="lg" variant="text">Button text</tw-button>
<tw-button size="xl" variant="text">Button text</tw-button>`;

  iconButton = `<tw-button tw-icon size="xs" variant="text">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" variant="tonal">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>`;

  fab: string = `<tw-button tw-icon size="xs" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>`;

  extentedFab = `<tw-button tw-icon size="xs" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" [fab]="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>`;

  roundedPrimaryButton = `<tw-button size="xs" className="rounded-full">Button text</tw-button>
<tw-button size="sm" className="rounded-full">Button text</tw-button>
<tw-button size="md" className="rounded-full">Button text</tw-button>
<tw-button size="lg" className="rounded-full">Button text</tw-button>
<tw-button size="xl" className="rounded-full">Button text</tw-button>`;

  roundedSecondaryButton = `<tw-button size="xs" variant="secondary" className="rounded-full">Button text</tw-button>
<tw-button size="sm" variant="secondary" className="rounded-full">Button text</tw-button>
<tw-button size="md" variant="secondary" className="rounded-full">Button text</tw-button>
<tw-button size="lg" variant="secondary" className="rounded-full">Button text</tw-button>
<tw-button size="xl" variant="secondary" className="rounded-full">Button text</tw-button>`;

  roundedTonalButton = `<tw-button size="xs" variant="tonal" className="rounded-full">Button text</tw-button>
<tw-button size="sm" variant="tonal" className="rounded-full">Button text</tw-button>
<tw-button size="md" variant="tonal" className="rounded-full">Button text</tw-button>
<tw-button size="lg" variant="tonal" className="rounded-full">Button text</tw-button>
<tw-button size="xl" variant="tonal" className="rounded-full">Button text</tw-button>`;

  roundedTextButton = `<tw-button size="xs" variant="text" className="rounded-full">Button text</tw-button>
<tw-button size="sm" variant="text" className="rounded-full">Button text</tw-button>
<tw-button size="md" variant="text" className="rounded-full">Button text</tw-button>
<tw-button size="lg" variant="text" className="rounded-full">Button text</tw-button>
<tw-button size="xl" variant="text" className="rounded-full">Button text</tw-button>`;

  roundedIconButton = `<tw-button tw-icon size="xs" variant="text" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" variant="secondary" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" variant="tonal" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>`;

  roundedFab = `<tw-button tw-icon size="xs" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
</tw-button>`;

  roundedExtendedFab = `<tw-button tw-icon size="xs" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>
<!-- ... -->
<tw-button tw-icon size="md" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>
<!-- ... -->
<tw-button tw-icon size="xl" [fab]="true" className="rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
  </svg>
  Button text
</tw-button>`;


}
