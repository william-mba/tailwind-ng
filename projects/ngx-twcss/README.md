# [Ngx-twcss]("https://github.com/William-Mba/ngx-twcss")

Ready-to-use [Tailwind CSS]("https://tailwindcss.com/docs/installation") components for [Angular]("https://angular.dev/") applications.

With unparalleled support for customizations that help you create unique web UI faster and easier.

## Getting started

### Prerequisites

[Install Tailwind CSS](https://tailwindcss.com/docs/guides/angular) in your Angular project.

### Install ngx-twcss

```ts
npm install ngx-twcss
```

### Modify tailwind.config.js

```js
module.exports = {
  ...
  content: [
    ...
    // add the line bellow
    "./node_modules/ngx-twcss/**/*.{html,ts}"
  ]
```

### Will you use forms ?

Install the forms plugin

```ts
npm install -D @tailwindcss/forms
```

Modify tailwind.config.js

```js
module.exports = {
  ...
  plugins: [
    // add the line bellow
    require('@tailwindcss/forms')
  ]
}
```

### Import ngx-twcss components

A. Using standalone components?

Import components in your *.component.ts file

```ts
@Component({
  standalone: true,
  imports: [
    ...
    PrimaryButton,
    SecondaryButton,
    ButtonGroup
  ],
  ...
})
export class ExampleComponent {
  ...
}
```

B. Not using standalone components?

Import components in your *.module.ts file

```ts
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    // Imports example
    PrimaryButton,
    SecondaryButton,
    ButtonGroup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

```html
<nxt-secondary-button>Back</nxt-secondary-button>
<nxt-primary-button>Complete</nxt-primary-button>
```

For more usage samples, please visit the github repo.
