# Buttons group

[Buttons group](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) help people select options, switch views, or sort elements.

Use ``tw-group`` to group buttons with other elements like dropdowns and checkboxes, for things like filtering options, pagination, or buttons with multiple actions.

<br/>

## Usage

<br/>

Three options button group.

---
Light | Dark
---------- | ---------
!["Button group on light mode"](images/buttons-group/button-group.png) | !["Button group on dark mode"](images/buttons-group/button-group-dark.png)
!["Button group on light mode"](images/buttons-group/button-group-usage.png) | !["Button group on dark mode"](images/buttons-group/button-group-usage-dark.png)

>Code sample

```html
<tw-group>
  <tw-secondary-button className="rounded-l-full">
    Years
  </tw-secondary-button>
  <tw-secondary-button className="rounded-none">
    Months
  </tw-secondary-button>
  <tw-secondary-button className="rounded-r-full">
    Days
  </tw-secondary-button>
</tw-group>
```

<br/>

Button group with icons

---
Light | Dark
---------- | ---------
!["Icon group on light mode"](images/buttons-group/icon-group.png) | !["Icon group on light mode"](images/buttons-group/icon-group-dark.png)
!["Icon group usage on light mode"](images/buttons-group/icon-group-usage.png) | !["Icon group usage on dark mode"](images/buttons-group/icon-group-usage-dark.png)

>Code sample

```html
<tw-group>
  <tw-secondary-button className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd"
        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
        clip-rule="evenodd" />
    </svg>
  </tw-secondary-button>
  <tw-secondary-button className="rounded-r-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd" />
    </svg>
  </tw-secondary-button>
</tw-group>
```

<br/>

Button group with stats usage

---
Light | Dark
---------- | ---------
!["Button group with stats on light mode"](images/buttons-group/button-group-with-stats.png) | !["Button group with stats on light mode"](images/buttons-group/button-group-with-stats-dark.png)
!["Button group with stats usage on light mode"](images/buttons-group/button-group-with-stats-usage.png) | !["Button group with stats usage on dark mode"](images/buttons-group/button-group-with-stats-usage-dark.png)

>Code sample

```html
<tw-group>
  <tw-secondary-button className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="#777" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </tw-secondary-button>
  <tw-secondary-button className="rounded-r-md">
    12k
  </tw-secondary-button>
</tw-group>
```

<br/>

## API

<br/>

### ButtonGroup `<tw-group>`

---

Property  | Type        | Attribute   | Default | Description
----------|-------------|-------------|---------|------------
n/a | n/a      | `class` |  `'inline-flex'`   | Align items using the `inline-flex` Tailwind CSS utility class.
---
