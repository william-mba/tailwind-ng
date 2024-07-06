# Avatars

Use these avatar components to display user profile pictures and company logos individually or grouped in stacks.

## Usage

<br/>

### Avatar group stacked bottom to top

---
Light | Dark
---------- | ---------
![""](images/avatar/avatar-group-stacked-bottom-to-top.png) | ![""](images/avatar/avatar-group-stacked-bottom-to-top-dark.png)

>Code

```html
...
<tw-group className="-space-x-1">
  <tw-avatar>
    <img alt="" class="size-9 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>

  <tw-avatar>
    <img alt="" class="size-9 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>

  <tw-avatar>
    <img alt="" class="size-9 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  </tw-avatar>

  <tw-avatar>
    <img alt="" class="size-9 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>
</tw-group>
...
```

<br/>

### Circular avatars

---
Light | Dark
---------- | ---------
![""](images/avatar/circular-avatars.png) | ![""](images/avatar/circular-avatars-dark.png)

>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>
...
```

> Avatar are fully rounded by default.

<br/>

### Circular avatars with top notification

---
Light | Dark
---------- | ---------
![""](images/avatar/circular-avatars-with-top-notification.png) | ![""](images/avatar/circular-avatars-with-top-notification-dark.png)

>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-1.5 bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-2.5 bg-yellow-300">1</tw-tooltip>
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full"
    src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-3 bg-blue-300">2</tw-tooltip>
</tw-avatar>
...
```

<br/>

### Rounded avatars

---
Light | Dark
---------- | ---------
![""](images/avatar/rounded-avatars.png) | ![""](images/avatar/rounded-avatars-dark.png)
>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
</tw-avatar>
```

<br/>

### Rounded avatars with top notification

---
Light | Dark
---------- | ---------
![""](images/avatar/rounded-avatars-with-top-notification.png) | ![""](images/avatar/rounded-avatars-with-top-notification-dark.png)
>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-1.5 -top-0.5 bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-2.5 -top-1 -right-1 bg-yellow-300">1</tw-tooltip>
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-lg"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-3 -top-1.5 -right-1.5 bg-blue-300">2</tw-tooltip>
</tw-avatar>
```

<br/>

### Circular avatars with placeholder icon

---
Light | Dark
---------- | ---------
![""](images/avatar/circular-avatars-with-icon.png) | ![""](images/avatar/circular-avatars-with-icon-dark.png)
>Code

```html
<tw-avatar className="size-6 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
      clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-9 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
      clip-rule="evenodd" />
  </svg>
</tw-avatar>

<tw-avatar className="size-11 text-gray-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
      clip-rule="evenodd" />
  </svg>
</tw-avatar>
```

<br/>

### Circular avatars with placeholder initials

---
Light | Dark
---------- | ---------
![""](images/avatar/circular-avatars-with-initials.png) | ![""](images/avatar/circular-avatars-with-initials-dark.png)
>Code

```html
<tw-avatar className="size-6 text-xs text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-9 text-lg text-white bg-gray-500">TW</tw-avatar>
<tw-avatar className="size-11 text-xl text-white bg-gray-500">TW</tw-avatar>
```

<br/>

### Circular avatars with bottom notification

---
Light | Dark
---------- | ---------
![""](images/avatar/circular-avatars-with-bottom-notification.png) | ![""](images/avatar/circular-avatars-with-bottom-notification-dark.png)

>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-1.5 top- -bottom-0 bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-2.5 top- -bottom-0 bg-yellow-300">1</tw-tooltip>
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-3 top- -bottom-0 bg-blue-300">2</tw-tooltip>
</tw-avatar>
```

> `top-` is used here in `className` to remove the default value setted

<br/>

### Rounded avatars with bottom notification

---
Light | Dark
---------- | ---------
![""](images/avatar/rounded-avatars-with-bottom-notification.png) | ![""](images/avatar/rounded-avatars-with-bottom-notification-dark.png)

>Code

```html
<tw-avatar>
  <img alt="" class="size-6 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-1.5 top- -bottom-0 bg-red-300" />
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-9 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-2.5 top- -bottom-0 bg-yellow-300">1</tw-tooltip>
</tw-avatar>

<tw-avatar>
  <img alt="" class="size-11 rounded-full"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  <tw-tooltip className="size-3 top- -bottom-0 bg-blue-300">2</tw-tooltip>
</tw-avatar>
```

<br/>

### Avatar group stacked top to bottom

---
Light | Dark
---------- | ---------
![""](images/avatar/avatar-group-stacked-top-to-bottom.png) | ![""](images/avatar/avatar-group-stacked-top-to-bottom-dark.png)

>Code

```html
...
<tw-group className="-space-x-1">
  <tw-avatar className="z-[4] hover:z-10 ring-2 ring-white">
    <img alt="" class="size-9 rounded-full"
      src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>

  <tw-avatar className="z-[3] hover:z-10 ring-2 ring-white">
    <img alt="" class="size-9 rounded-full"
      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>

  <tw-avatar className="z-[2] hover:z-10 ring-2 ring-white">
    <img alt="" class="size-9 rounded-full"
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80">
  </tw-avatar>
  
  <tw-avatar className="z-[1] hover:z-10 ring-2 ring-white">
    <img alt="" class="size-9 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>
</tw-group>
...
```

<br/>

### Avatar With text

---
Light | Dark
---------- | ---------
![""](images/avatar/avatar-with-text.png) | ![""](images/avatar/avatar-with-text-dark.png)

>Code

```html
<tw-group className="gap-x-2">
  <tw-avatar>
    <img alt="" class="size-9 rounded-full"
      src="https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
  </tw-avatar>
  <span class="relative cursor-pointer text-nowrap group dark:text-white">
    <div class="absolute -top-1.5 text-md font-normal">Jane Smith</div>
    <a class="absolute bottom-0.5 text-xs opacity-70 group-hover:opacity-[1]">View profile</a>
  </span>
</tw-group>
```

## API

<br/>

### Avatar `<tw-avatar>`

---
Property  | Type        | Attribute   | Default | Description
----------|-------------|-------------|---------|------------
className | string      | `className` |  `''`   | The utilities class names to add/replace/remove.

<br/>

## Configurations

<br/>

Avatar config

---

```ts
export const AvatarConfig: AvatarConfig = {
  display: {
    type: 'flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center'
  },
  position: 'relative',
  borderRadius: 'rounded-full'
}
```

---
