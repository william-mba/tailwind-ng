import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './badge-demo.component.html'
})
export class BadgeDemoComponent {

  flat = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs">Badge</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs">Badge</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs">Badge</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs">Badge</tw-badge>`;

  withBorder = `<tw-badge className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">Badge</tw-badge>`;

  withLeadingIcon = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  withLeadingIconAndBorder = `<tw-badge
  className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  withActionButton = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  withActionButtonAndBorder = `<tw-badge className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  roundedFlat = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">Badge</tw-badge>`;

  roundedWithBorder = `<tw-badge className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>`;

  roundedWithLeadingIcon = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  roundedWithLeadingIconAndBorder = `<tw-badge className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</tw-badge>`;

  roundedWithActionButton = `<tw-badge className="text-gray-500 bg-gray-500/10 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

  roundedWithActionButtonAndBorder = `<tw-badge className="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>
<tw-badge className="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">
  Badge
  <button tw-badge-action>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</tw-badge>`;

}
