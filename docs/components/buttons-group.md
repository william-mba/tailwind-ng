# Buttons group

[Buttons group](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) help people select options, switch views, or sort elements.

Use our button group components to group buttons with other elements like dropdowns and checkboxes, for things like filtering options, pagination, or buttons with multiple actions.

Light | Dark
---------- | ---------
!["Button group on light mode"](images/buttons-group/button-group.png) | !["Button group on dark mode"](images/buttons-group/button-group-dark.png)
!["Icon group on light mode"](images/buttons-group/icon-group.png) | !["Icon group on light mode"](images/buttons-group/icon-group-dark.png)
!["Button group with stats on light mode"](images/buttons-group/button-group-with-stats.png) | !["Button group with stats on light mode"](images/buttons-group/button-group-with-stats-dark.png)
!["Button group with dropdown on light mode"](images/buttons-group/button-group-with-dropdown.png) | !["Button group with dropdown on light mode"](images/buttons-group/button-group-with-dropdown-dark.png)

## Usage

A buttons group of three options

Light | Dark
---------- | ---------
!["Button group on light mode"](images/buttons-group/button-group-usage.png) | !["Button group on dark mode"](images/buttons-group/button-group-usage-dark.png)

Code:

```html
<nxt-button-group>
  <nxt-secondary-button className="rounded-l-full">
    Years
  </nxt-secondary-button>
  <nxt-secondary-button className="rounded-none">
    Months
  </nxt-secondary-button>
  <nxt-secondary-button className="rounded-r-full">
    Days
  </nxt-secondary-button>
</nxt-button-group>
```

## Icons

Icon group usage.

Light | Dark
---------- | ---------
!["Icon group usage on light mode"](images/buttons-group/icon-group-usage.png) | !["Icon group usage on dark mode"](images/buttons-group/icon-group-usage-dark.png)

Code:

```html
<nxt-button-group>
  <nxt-secondary-button className="rounded-l-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd"
        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
        clip-rule="evenodd" />
    </svg>
  </nxt-secondary-button>
  <nxt-secondary-button className="rounded-r-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
      <path fill-rule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd" />
    </svg>
  </nxt-secondary-button>
</nxt-button-group>
```

Button group with stats usage

Light | Dark
---------- | ---------
!["Button group with stats usage on light mode"](images/buttons-group/button-group-with-stats-usage.png) | !["Button group with stats usage on dark mode"](images/buttons-group/button-group-with-stats-usage-dark.png)

```html
<nxt-button-group>
  <nxt-secondary-button className="rounded-l-md">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="#777" viewBox="0 -960 960 960">
      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
    </svg>
    Bookmark
  </nxt-secondary-button>
  <nxt-secondary-button className="rounded-r-md">
    12k
  </nxt-secondary-button>
</nxt-button-group>
```

## API

### ButtonGroup `<nxt-button-group>`

Properties

Property  | Type        | Attribute   | Default | Description
----------|-------------|-------------|---------|------------
n/a | n/a      | `class` |  `'inline-flex'`   | Align items using the `inline-flex` Tailwind CSS utility class.
