import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './badge-demo.component.html',
  styles: ``
})
export class BadgeDemoComponent {

  flat = `<tw-badge className="bg-blue-600 text-blue-600 rounded-md">Badge</tw-badge>
<tw-badge className="bg-red-600 text-red-500 rounded-md">Badge</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 rounded-md">Badge</tw-badge>`;

  withBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300 rounded-md">Badge</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300 rounded-md">Badge</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300 rounded-md">Badge</tw-badge>`;

  withLeadingIcon = `<tw-badge className="bg-blue-600 text-blue-600 rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  withLeadingIconAndBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300 rounded-md rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300 rounded-md rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300 rounded-md rounded-md">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  withActionButton = `<tw-badge className="bg-blue-600 text-blue-600 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  withActionButtonAndBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300 rounded-md">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  roundedFlat = `<tw-badge className="bg-blue-600 text-blue-600">Badge</tw-badge>
<tw-badge className="bg-red-600 text-red-500">Badge</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600">Badge</tw-badge>`;

  roundedWithBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300">Badge</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300">Badge</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300">Badge</tw-badge>`;

  roundedWithLeadingIcon = `<tw-badge className="bg-blue-600 text-blue-600">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-red-600 text-red-500">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  roundedWithLeadingIconAndBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  roundedWithActionButton = `<tw-badge className="bg-blue-600 text-blue-600">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-red-600 text-red-500">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  roundedWithActionButtonAndBorder = `<tw-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-red-600 text-red-500 ring-1 ring-red-300">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="bg-yellow-600 text-yellow-600 ring-1 ring-yellow-300">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

}
