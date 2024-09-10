import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-demo',
  templateUrl: './buttons-demo.component.html'
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

  iconButton = `<!-- Text -->
<tw-button [icon]="true" size="xs" variant="text">
  <tw-icon source="googlefonts" name="add" />
</tw-button>

<!-- Secondary -->
<tw-button [icon]="true" size="md" variant="secondary">
  <tw-icon source="googlefonts" name="add" />
</tw-button>

<!-- Tonal -->
<tw-button [icon]="true" size="xl" variant="tonal">
  <tw-icon source="googlefonts" name="add" />
</tw-button>`;

  fab: string = `<tw-button [icon]="true" size="xs" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>
<tw-button [icon]="true" size="md" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>
<tw-button [icon]="true" size="xl" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>`;

  extentedFab = `<tw-button [icon]="true" size="xs" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>
<tw-button [icon]="true" size="md" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>
<tw-button [icon]="true" size="xl" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>`;

  roundedPrimaryButton = `<tw-button class="rounded-full" size="xs">Button text</tw-button>
<tw-button class="rounded-full" size="sm">Button text</tw-button>
<tw-button class="rounded-full" size="md">Button text</tw-button>
<tw-button class="rounded-full" size="lg">Button text</tw-button>
<tw-button class="rounded-full" size="xl">Button text</tw-button>`;

  roundedSecondaryButton = `<tw-button class="rounded-full" size="xs" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="sm" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="md" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="lg" variant="secondary">Button text</tw-button>
<tw-button class="rounded-full" size="xl" variant="secondary">Button text</tw-button>`;

  roundedTonalButton = `<tw-button class="rounded-full" size="xs" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="sm" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="md" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="lg" variant="tonal">Button text</tw-button>
<tw-button class="rounded-full" size="xl" variant="tonal">Button text</tw-button>`;

  roundedTextButton = `<tw-button class="rounded-full" size="xs" variant="text">Button text</tw-button>
<tw-button class="rounded-full" size="sm" variant="text">Button text</tw-button>
<tw-button class="rounded-full" size="md" variant="text">Button text</tw-button>
<tw-button class="rounded-full" size="lg" variant="text">Button text</tw-button>
<tw-button class="rounded-full" size="xl" variant="text">Button text</tw-button>`;

  roundedIconButton = `<!-- Text -->
<tw-button class="rounded-full" size="xs" variant="text" [icon]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>

<!-- Secondary -->
<tw-button class="rounded-full" size="md" variant="secondary" [icon]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>

<!-- Tonal -->
<tw-button class="rounded-full" size="xl" variant="tonal" [icon]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>`;

  roundedFab = `<tw-button class="rounded-full" size="xs" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>
<tw-button class="rounded-full" size="md" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>
<tw-button class="rounded-full" size="xl" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
</tw-button>`;

  roundedExtendedFab = `<tw-button class="rounded-full" size="xs" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>
<tw-button class="rounded-full" size="md" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>
<tw-button class="rounded-full" size="xl" [icon]="true" [fab]="true">
  <tw-icon source="googlefonts" name="add" />
  Button text
</tw-button>`;

}
