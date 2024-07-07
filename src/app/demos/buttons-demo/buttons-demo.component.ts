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

  primaryButton = `<tw-button size="sm">Button text</tw-button>
<tw-button> Button text </tw-button>
<tw-button size="lg"> Button text </tw-button>`;

  secondaryButton = `<tw-button size="sm" variant="secondary">Button text</tw-button>
<tw-button variant="secondary"> Button text </tw-button>
<tw-button size="lg" variant="secondary"> Button text </tw-button>`;

  tonalButton = `<tw-button size="sm" variant="tonal">Button text</tw-button>
<tw-button variant="tonal"> Button text </tw-button>
<tw-button size="lg" variant="tonal"> Button text </tw-button>`;

  textButton = `<tw-button size="sm" variant="text">Button text</tw-button>
<tw-button variant="text"> Button text </tw-button>
<tw-button size="lg" variant="text"> Button text </tw-button>`;

  iconButton = `<!-- Primary -->
<div>
  <tw-button tw-icon className="p-1 rounded-lg">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon className="rounded-lg">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon className="p-3 rounded-lg">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Secondary -->
<div>
  <tw-button tw-icon variant="secondary" className="p-1 rounded-lg">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="secondary" className="rounded-lg">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="secondary" className="p-3 rounded-lg">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Tonal -->
<div>
  <tw-button tw-icon variant="tonal" className="p-1 rounded-lg">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="tonal" className="rounded-lg">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="tonal" className="p-3 rounded-lg">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Text -->
<div>
  <tw-button tw-icon variant="text" className="p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="text" className="p-1">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="text" className="p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
`;

  fab: string = `<!-- Primary -->
<tw-button tw-fab className="p-1 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab className="rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab className="p-3 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
</tw-button>

<!-- Secondary -->
<tw-button tw-fab variant="secondary" className="p-1 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="secondary" className="rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="secondary" className="p-3 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
</tw-button>

<!-- Tonal -->
<tw-button tw-fab variant="tonal" className="p-1 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="tonal" className="rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="tonal" className="p-3 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
</tw-button>

<!-- Text -->
<tw-button tw-fab variant="text" className="p-1 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="text" className="rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
</tw-button>
<tw-button tw-fab variant="text" className="p-3 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
</tw-button>`;

  extentedFab = `<!-- Primary -->
<tw-button tw-fab size="sm" className="p-1 px-3 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab className="px-6 rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab size="lg" className="p-3 px-8 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
  New task
</tw-button>

<!-- Secondary -->
<tw-button tw-fab size="sm" variant="secondary" className="p-1 px-3 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab variant="secondary" className="px-6 rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab size="lg" variant="secondary" className="p-3 px-8 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
  New task
</tw-button>

<!-- Tonal -->
<tw-button tw-fab size="sm" variant="tonal" className="p-1 px-3 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab variant="tonal" className="px-6 rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab size="lg" variant="tonal" className="p-3 px-8 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
  New task
</tw-button>

<!-- Text -->
<tw-button tw-fab size="sm" variant="text" className="p-1 px-3 rounded-lg">
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab variant="text" className="px-6 rounded-lg">
  <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
  </svg>
  New task
</tw-button>
<tw-button tw-fab size="lg" variant="text" className="p-3 px-8 rounded-lg">
  <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
  New task
</tw-button>`

  roundedPrimaryButton = `<tw-button className="rounded-full" size="sm">Button text</tw-button>
<tw-button className="rounded-full"> Button text</tw-button>
<tw-button className="rounded-full" size="lg"> Button text</tw-button>`;

  roundedSecondaryButton = `<tw-button className="rounded-full" size="sm" variant="secondary">Button text</tw-button>
<tw-button className="rounded-full" variant="secondary"> Button text</tw-button>
<tw-button className="rounded-full" size="lg" variant="secondary"> Button text</tw-button>`;

  roundedTonalButton = `<tw-button className="rounded-full" size="sm" variant="tonal">Button text</tw-button>
<tw-button className="rounded-full" variant="tonal"> Button text</tw-button>
<tw-button className="rounded-full" size="lg" variant="tonal"> Button text</tw-button>`;

  roundedTextButton = `<tw-button className="rounded-full" size="sm" variant="text">Button text</tw-button>
<tw-button className="rounded-full" variant="text"> Button text</tw-button>
<tw-button className="rounded-full" size="lg" variant="text"> Button text</tw-button>`;

  roundedIconButton = `<!-- Primary -->
<div>
  <tw-button tw-icon className="rounded-full p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon className="rounded-full">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon className="rounded-full p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Secondary -->
<div>
  <tw-button tw-icon variant="secondary" className="rounded-full p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="secondary" className="rounded-full">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="secondary" className="rounded-full p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Tonal -->
<div>
  <tw-button tw-icon variant="tonal" className="rounded-full p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="tonal" className="rounded-full">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="tonal" className="rounded-full p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Text -->
<div>
  <tw-button tw-icon variant="text" className="rounded-full p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="text" className="rounded-full p-1">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-icon variant="text" className="rounded-full p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>`;

  roundedFab = `<!-- Primary -->
<div>
  <tw-button tw-fab className="p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab>
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab className="p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Secondary -->
<div>
  <tw-button tw-fab variant="secondary" className="p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="secondary">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="secondary" className="p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Tonal -->
<div>
  <tw-button tw-fab variant="tonal" className="p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="tonal">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="tonal" className="p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>
<!-- Text -->
<div>
  <tw-button tw-fab variant="text" className="p-1">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="text">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  </tw-button>
  <tw-button tw-fab variant="text" className="p-3">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
  </tw-button>
</div>`;

  roundedExtendedFab = `<!-- Primary -->
<div>
  <tw-button tw-fab size="sm" className="p-1 px-3">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab className="px-6">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab size="lg" className="p-3 px-8">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
    New task
  </tw-button>
</div>
<!-- Secondary -->
<div>
  <tw-button tw-fab size="sm" variant="secondary" className="p-1 px-3">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab variant="secondary" className="px-6">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab size="lg" variant="secondary" className="p-3 px-8">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
    New task
  </tw-button>
</div>
<!-- Tonal -->
<div>
  <tw-button tw-fab size="sm" variant="tonal" className="p-1 px-3">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab variant="tonal" className="px-6">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab size="lg" variant="tonal" className="p-3 px-8">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
    New task
  </tw-button>
</div>
<!-- Text -->
<div>
  <tw-button tw-fab size="sm" variant="text" className="p-1 px-3">
    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab variant="text" className="px-6">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
    New task
  </tw-button>
  <tw-button tw-fab size="lg" variant="text" className="p-3 px-8">
    <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
    </svg>
    New task
  </tw-button>
</div>`;


}
