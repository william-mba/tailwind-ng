export const PREVIEW = {
  quick_start_guide: `// Import from ngxtw
import { AvatarComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    AvatarComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: \`<img tw-avatar size="md" class="ring-2 ring-white" alt="" src=...\`
})
export class ExampleComponent { ... }`,
  html_template_customization: `<img tw-avatar size="xs" class="rounded-lg" ... />`,
  component_instance_customization: `// Import from ngxtw
import { Avatar } from 'ngxtw';

@Component({
  ...
  standalone: true,
  // Create a template reference variable. e.g.: '#avatar'
  template: \`<img tw-avatar #avatar size="xs" class="rounded-lg" ...\`
})
export class ExampleComponent {
  // Get the component reference
  @ViewChild('avatar', { static: true }) avatar!: Button;

  onClick() {
    this.avatar.classList.update([
      ... // Set your customization here
    ]);
  }
}`,
  config_provider_customization: `// Imports from ngxtw
import { provideAvatarConfig } from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  providers: [
    provideAvatarConfig({
      ... // Set your customization here
    })
  ],
  ...
})
export class ExampleComponent { ... }`,
  config_manager_customization: `// Imports from ngxtw
import { AvatarConfig, ReactiveConfigManager} from 'ngxtw';

@Component({
  standalone: true,
  selector: 'app-demo',
  ...
})
export class ExampleComponent {
  // Inject the ReactiveConfigManager
  reactiveConfigManager = inject(ReactiveConfigManager);

  exampleMethod() {
    this.reactiveConfigManager.update<AvatarConfig>('Avatar', {
      ... // Set your customization here
    });
  }

}`,
  avatar_group_stacked_bottom_to_top: `<div class="flex -space-x-1">
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
</div>`,
  circular_avatars: `<img tw-avatar size="xs" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="md" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="xl" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`,
  circular_avatars_with_top_notification: `<div class="relative">
  <img tw-avatar size="xs" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xs" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-red-300" />
</div>

<div class="relative">
  <img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="sm" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-yellow-300" />
</div>

<div class="relative">
  <img tw-avatar size="md" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="md" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-blue-300" />
</div>

<div class="relative">
  <img tw-avatar size="lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="lg" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-green-300" />
</div>

<div class="relative">
  <img tw-avatar size="xl" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xl" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-slate-300" />
</div>`,
  rounded_avatars: `<img tw-avatar size="xs" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="sm" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="md" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="lg" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
<img tw-avatar size="xl" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">`,
  rounded_avatars_with_top_notification: `<div class="relative">
  <img tw-avatar size="xs" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xs" class="absolute -top-0 -right-0 rounded-full ring-2 ring-white bg-red-300" />
</div>

<div class="relative">
  <img tw-avatar size="sm" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="sm" class="absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-white bg-yellow-300" />
</div>

<div class="relative">
  <img tw-avatar size="md" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="md" class="absolute -top-1 -right-1 rounded-full ring-2 ring-white bg-blue-300" />
</div>

<div class="relative">
  <img tw-avatar size="lg" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="lg" class="absolute -top-1 -right-1 rounded-full ring-2 ring-white bg-green-300" />
</div>

<div class="relative">
  <img tw-avatar size="xl" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xl" class="absolute -top-1.5 -right-1.5 rounded-full ring-2 ring-white bg-slate-300" />
</div>`,
  circular_avatars_with_placeholder_icon: `<tw-avatar tw-icon size="xs" class="text-slate-50 bg-slate-400" key="user" source="heroicons" />
<tw-avatar tw-icon size="sm" class="text-slate-50 bg-slate-400" key="user" source="heroicons" />
<tw-avatar tw-icon size="md" class="text-slate-50 bg-slate-400" key="user" source="heroicons" />
<tw-avatar tw-icon size="lg" class="text-slate-50 bg-slate-400" key="user" source="heroicons" />
<tw-avatar tw-icon size="xl" class="text-slate-50 bg-slate-400" key="user" source="heroicons" />`,
  circular_avatars_with_placeholder_initials: `<tw-avatar size="xs" class="text-xs text-white bg-slate-500">TW</tw-avatar>
<tw-avatar size="sm" class="text-lg text-white bg-slate-500">TW</tw-avatar>
<tw-avatar size="md" class="text-xl text-white bg-slate-500">TW</tw-avatar>
<tw-avatar size="lg" class="text-2xl text-white bg-slate-500">TW</tw-avatar>
<tw-avatar size="xl" class="text-3xl text-white bg-slate-500">TW</tw-avatar>`,
  circular_avatars_with_bottom_notification: `<div class="relative">
  <img tw-avatar size="xs" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xs" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-red-300" />
</div>

<div class="relative">
  <img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="sm" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-yellow-300" />
</div>

<div class="relative">
  <img tw-avatar size="md" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="md" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-blue-300" />
</div>

<div class="relative">
  <img tw-avatar size="lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="lg" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-green-300" />
</div>

<div class="relative">
  <img tw-avatar size="xl" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xl" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-slate-300" />
</div>`,
  rounded_avatars_with_bottom_notification: `<div class="relative">
  <img tw-avatar size="xs" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xs" class="absolute -bottom-0 -right-0 rounded-full ring-2 ring-white bg-red-300" />
</div>

<div class="relative">
  <img tw-avatar size="sm" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="sm" class="absolute -bottom-0.5 -right-0.5 rounded-full ring-2 ring-white bg-yellow-300" />
</div>

<div class="relative">
  <img tw-avatar size="md" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="md" class="absolute -bottom-1 -right-1 rounded-full ring-2 ring-white bg-blue-300" />
</div>

<div class="relative">
  <img tw-avatar size="lg" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="lg" class="absolute -bottom-1 -right-1 rounded-full ring-2 ring-white bg-green-300" />
</div>

<div class="relative">
  <img tw-avatar size="xl" class="rounded-lg" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <tw-badge size="xl" class="absolute -bottom-1.5 -right-1.5 rounded-full ring-2 ring-white bg-slate-300" />
</div>`,
  avatar_group_stacked_top_to_bottom: `<div class="flex -space-x-1">
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
</div>`,
  avatar_with_text: `<div class="flex gap-x-3">
  <img tw-avatar size="sm" alt="" src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  <span>
    <div class="text-sm leading-none cursor-pointer text-nowrap">Jane Smith</div>
    <button tw-button variant="text" size="xs" class="text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 p-0">
      View profile
    </button>
  </span>
</div>`,
}
