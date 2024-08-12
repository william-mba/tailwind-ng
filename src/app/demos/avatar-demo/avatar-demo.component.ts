import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-demo',
  templateUrl: './avatar-demo.component.html'
})
export class AvatarDemoComponent {
  avatarGroupStackedBottomToTop = `<div class="flex -space-x-1">
  <img tw-avatar className="size-6 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="size-6 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="size-6 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar className="size-6 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
    <img tw-avatar className="size-9 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    <img tw-avatar className="size-9 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
    <img tw-avatar className="size-9 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
    <img tw-avatar className="size-9 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar className="size-11 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="size-11 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="size-11 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar className="size-11 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>`;

  circularAvatars = `<img tw-avatar className="size-6" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-9" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-11" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-14" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-16" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`;

  circularAvatarsWithTopNotification = `<tw-avatar>
  <img alt="" class="size-6 rounded-full" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-14 rounded-full" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-16 rounded-full" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  roundedAvatars = `<img tw-avatar className="size-6 rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-9 rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-11 rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-14 rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar className="size-16 rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`;

  roundedAvatarsWithTopNotification = `<tw-avatar>
  <img alt="" class="size-6 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0 -right-0.5 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0.5 -right-0.5 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-0.5 -right-0.5 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-14 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-1 -right-1 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-16 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -top-1 -right-1 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  circularAvatarsWithPlaceholderIcon = `<tw-avatar className="size-6 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-9 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-11 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-14 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-16 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
  </svg>
</tw-avatar>`;

  circularAvatarsWithPlaceholderInitials = `<tw-avatar className="size-6 text-xs text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-9 text-lg text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-11 text-xl text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-14 text-2xl text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-16 text-3xl text-white bg-gray-500">TW</tw-avatar>`;

  circularAvatarsWithBottomNotification = `<tw-avatar>
  <img alt="" class="size-6 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0 -right-0 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0 -right-0 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0 -right-0 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-14 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0 -right-0 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-16 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0 -right-0 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  roundedAvatarsWithBottomNotification = `<tw-avatar>
  <img alt="" class="size-6 rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0.5 -right-0.5 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0.5 -right-0.5 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-0.5 -right-1 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-14 rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-1 -right-1 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-16 rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge className="absolute -bottom-1 -right-1 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  avatarGroupStackedTopToBottom = `<div class="flex -space-x-1">
  <img tw-avatar className="z-[4] hover:z-10 ring-2 ring-white size-6" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[3] hover:z-10 ring-2 ring-white size-6" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[2] hover:z-10 ring-2 ring-white size-6" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar className="z-[1] hover:z-10 ring-2 ring-white size-6" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar className="z-[4] hover:z-10 ring-2 ring-white size-9" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[3] hover:z-10 ring-2 ring-white size-9" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[2] hover:z-10 ring-2 ring-white size-9" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar className="z-[1] hover:z-10 ring-2 ring-white size-9" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar className="z-[4] hover:z-10 ring-2 ring-white size-11" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[3] hover:z-10 ring-2 ring-white size-11" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar className="z-[2] hover:z-10 ring-2 ring-white size-11" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar className="z-[1] hover:z-10 ring-2 ring-white size-11" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>`;

  avatarWithText = `<div className="gap-x-2">
  <img tw-avatar className="size-9" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <span class="relative cursor-pointer text-nowrap group dark:text-white">
    <div class="text-base leading-none">Jane Smith</div>
    <a class="text-xs opacity-70 group-hover:opacity-[1]">View profile</a>
  </span>
</div>`;


}
