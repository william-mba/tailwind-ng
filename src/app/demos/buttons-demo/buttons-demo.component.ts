import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-demo',
  templateUrl: './buttons-demo.component.html',
  styles: ``
})
export class ButtonsDemoComponent {
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


}
