import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './badge-demo.component.html'
})
export class BadgeDemoComponent {

  flat = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs">Badge</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs">Badge</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs">Badge</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs">Badge</tw-badge>`;

  withBorder = `<tw-badge class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">Badge</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">Badge</tw-badge>`;

  withLeadingIcon = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>`;

  withLeadingIconAndBorder = `<tw-badge
  class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>`;

  withActionButton = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>`;

  withActionButtonAndBorder = `<tw-badge class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>`;

  roundedFlat = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">Badge</tw-badge>`;

  roundedWithBorder = `<tw-badge class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">Badge</tw-badge>`;

  roundedWithLeadingIcon = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>`;

  roundedWithLeadingIconAndBorder = `<tw-badge class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">
  <tw-icon name="dot" size="xs" />
  Badge
</tw-badge>`;

  roundedWithActionButton = `<tw-badge class="text-gray-500 bg-gray-500/10 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>`;

  roundedWithActionButtonAndBorder = `<tw-badge class="text-gray-500 bg-gray-500/10 ring-gray-500/20 ring-1 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-blue-500 bg-blue-500/10 ring-blue-500/20 ring-1 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-red-500 bg-red-500/10 ring-red-500/20 ring-1 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>
<tw-badge class="text-yellow-500 bg-yellow-500/10 ring-yellow-500/20 ring-1 text-xs rounded-full">
  Badge
  <tw-icon tw-badge-action name="x-mark" source="heroicons" size="xs" />
</tw-badge>`;

}
