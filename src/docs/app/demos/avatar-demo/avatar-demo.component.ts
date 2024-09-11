import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-avatar-demo',
  templateUrl: './avatar-demo.component.html'
})
export class AvatarDemoComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
  avatarGroupStackedBottomToTop = `<div class="flex -space-x-1">
  <img tw-avatar size="xs" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar size="md" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="md" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="md" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="md" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar size="xl" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>`;

  circularAvatars = `<img tw-avatar size="xs" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="md" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="xl" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`;

  circularAvatarsWithTopNotification = `<tw-avatar size="xs">
  <img class="rounded-full" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar size="sm">
  <img class="rounded-full" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar size="md">
  <img class="rounded-full" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar size="lg">
  <img class="rounded-full" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar size="xl">
  <img class="rounded-full" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  roundedAvatars = `<img tw-avatar size="xs" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="sm" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="md" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="lg" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="xl" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`;

  roundedAvatarsWithTopNotification = `<tw-avatar size="xs">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0 -right-0.5 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar size="sm">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0.5 -right-0.5 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar size="md">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-0.5 -right-0.5 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar size="lg">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-1 -right-1 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar size="xl">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -top-1 -right-1 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  circularAvatarsWithPlaceholderIcon = `<tw-avatar tw-icon size="xs" class="text-gray-400" source="heroicons" name="user-circle" />
<tw-avatar tw-icon size="sm" class="text-gray-400" source="heroicons" name="user-circle" />
<tw-avatar tw-icon size="md" class="text-gray-400" source="heroicons" name="user-circle" />
<tw-avatar tw-icon size="lg" class="text-gray-400" source="heroicons" name="user-circle" />
<tw-avatar tw-icon size="xl" class="text-gray-400" source="heroicons" name="user-circle" />`;

  circularAvatarsWithPlaceholderInitials = `<tw-avatar size="xs" class="text-xs text-white bg-gray-500">TW</tw-avatar>
<tw-avatar size="sm" class="text-lg text-white bg-gray-500">TW</tw-avatar>
<tw-avatar size="md" class="text-xl text-white bg-gray-500">TW</tw-avatar>
<tw-avatar size="lg" class="text-2xl text-white bg-gray-500">TW</tw-avatar>
<tw-avatar size="xl" class="text-3xl text-white bg-gray-500">TW</tw-avatar>`;

  circularAvatarsWithBottomNotification = `<tw-avatar size="xs">
  <img class=" rounded-full" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0 -right-0 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar size="sm">
  <img class=" rounded-full" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0 -right-0 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar size="md">
  <img class=" rounded-full" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0 -right-0 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar size="lg">
  <img class=" rounded-full" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0 -right-0 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar size="xl">
  <img alt="" class="rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0 -right-0 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  roundedAvatarsWithBottomNotification = `<tw-avatar size="xs">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0.5 -right-0.5 size-1.5 p-0 rounded-full ring-2 ring-white bg-red-300" />
</tw-avatar>

<tw-avatar size="sm">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0.5 -right-0.5 p-0 size-2 rounded-full ring-2 ring-white bg-yellow-300" />
</tw-avatar>

<tw-avatar size="md">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-0.5 -right-1 p-0 size-2.5 rounded-full ring-2 ring-white bg-blue-300" />
</tw-avatar>

<tw-avatar size="lg">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-1 -right-1 p-0 size-3 rounded-full ring-2 ring-white bg-green-300" />
</tw-avatar>

<tw-avatar size="xl">
  <img class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <tw-badge class="absolute -bottom-1 -right-1 p-0 size-3.5 rounded-full ring-2 ring-white bg-gray-300" />
</tw-avatar>`;

  avatarGroupStackedTopToBottom = `<div class="flex -space-x-1">
  <img tw-avatar size="xs" class="z-[4] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="z-[3] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="z-[2] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="xs" class="z-[1] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar size="md" class="z-[4] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="md" class="z-[3] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="md" class="z-[2] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="md" class="z-[1] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>

<div class="flex -space-x-1">
  <img tw-avatar size="xl" class="z-[4] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="z-[3] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="z-[2] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  <img tw-avatar size="xl" class="z-[1] hover:z-10 ring-2 ring-white" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</div>`;

  avatarWithText = `<div class="flex gap-x-2">
  <img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <span class="relative cursor-pointer text-nowrap group dark:text-white">
    <div class="text-base leading-none">Jane Smith</div>
    <a class="text-xs opacity-70 group-hover:opacity-[1]">View profile</a>
  </span>
</div>`;
}
