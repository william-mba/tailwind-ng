<a href="https://ngx-twcss.williammba.com">
<div align="center">
    <img src="./src/assets/images/ngx-twcss-logo-doc.png" alt="ngx-twcss" height="200" />
    <h1>ngx-twcss</h1>
</div>
</a>

<div align="center">
The best way to quickly integrate <a href="https://tailwindui.com/">Tailwind CSS components</a> with <a href="https://angular.dev/">Angular</a>.
<br/>
<br/>
<br/>
</div>

## Resources

- [Roadmap](docs/roadmap.md)
- [Components docs](docs/components/)
- [Live demo](https://stackblitz.com/~/github.com/William-Mba/ngx-twcss)
---

## Quick start

### 0. Prerequisites

[Install Tailwind CSS](https://tailwindcss.com/docs/guides/angular) in your Angular project.

### 1. Install ngx-twcss

```ts
npm install ngx-twcss
```

### 2. Modify tailwind.config.js

```js
module.exports = {
  ...
  content: [
    ...
    // add the line bellow
    "./node_modules/ngx-twcss/**/*.{html,ts}"
  ]
```

### 3. Enable the animations module

Import ``provideAnimations`` from ``@angular/platform-browser/animations`` and add it to the providers list in the ``bootstrapApplication`` function call.

```ts
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
  ]
});
```

For ``NgModule`` based applications import ``BrowserAnimationsModule``, which introduces the animation capabilities into your Angular root application module.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }
```

### 4. Install forms plugin (if you will use forms elements)

Install the forms plugin from npm

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

### 5. Import Ngx-twcss components

For ``standalone`` components, import components in your *.component.ts file

```ts
@Component({
  standalone: true,
  imports: [
    ...
    // Some components
    Button,
    Icon,
    ButtonGroup,
    Dropdown,
    Badge,
    Avatar,
    ModalDialog
  ],
  ...
})
export class ExampleComponent {
  ...
}
```

For ``NgModule`` based components, import components in your *.module.ts file

  ```ts
  @NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
      // Some components
      Button,
      Icon,
      ButtonGroup,
      Dropdown,
      Badge,
      Avatar,
      ModalDialog
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

## Usage samples

```html
<tw-button>Back</tw-button>
<tw-button>Complete</tw-button>
```

For more usage samples, see the [components docs](docs/components/).

## Give a Star ⭐️

Thanks to star this library to help increase it reach if you find it helpful or use it in your project.
