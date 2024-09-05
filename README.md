
<div align="center">
  <a href="https://ngxtw.williammba.com/">
    <img src="https://ngxtw.williammba.com/assets/images/ngxtw-logo-doc.png" alt="ngxtw" height="200" />
    <h1>ngxtw</h1>
  </a>
</div>

<div align="center">
The best way to quickly integrate <a href="https://tailwindui.com/">Tailwind CSS components</a> with <a href="https://angular.dev/">Angular</a>.
<br/>
<br/>
<br/>

[![Build Status](https://dev.azure.com/ecologiciel/Lab/_apis/build/status%2Fngxtw-package?repoName=William-Mba%2Fngxtw&branchName=master)](https://dev.azure.com/ecologiciel/Lab/_build/latest?definitionId=5&repoName=William-Mba%2Fngxtw&branchName=master)
</div>


## Resources

- [Roadmap](https://ngxtw.williammba.com/roadmap)
- [Live demo](https://stackblitz.com/~/github.com/William-Mba/ngxtw)
- [Components docs](https://ngxtw.williammba.com/)

---

## Quick start

### 0. Prerequisites

[Install Tailwind CSS](https://tailwindcss.com/docs/guides/angular) in your Angular project.

### 1. Install ngxtw package

Using npm
```ts
npm install ngxtw
```

Using yarn

```ts
yarn add ngxtw
```

### 2. Modify tailwind.config.js

```js
module.exports = {
  ...
  content: [
    ...
    // add the line bellow
    "./node_modules/ngxtw/**/*.{html,ts}"
  ]
```

### 3. Import ngxtw components

If you are using ``standalone`` components, import our components in your *.component.ts file

```ts
@Component({
  standalone: true,
  imports: [
    ...
    // Some components
    ButtonComponent,
    DropdownComponent,
    BadgeComponent,
  ],
  ...
})
export class DemoComponent {
  ...
}
```

If you are using ``NgModule`` based components, import our components in your *.module.ts file

  ```ts
  @NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
      // Some components
      ModalDialogModule,
      ComboboxModule,
      TypographyModule
    ],
    bootstrap: [DemoAppComponent]
  })
  export class DemoAppModule { }
  ```

🎉Congratulations! You are all set 🚀 </br>

What's next ?
[Visit our website for more details on components](https://ngxtw.williammba.com).

---

#### NOTE

If you imported our forms components, install Tailwind CSS forms plugin.

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

## Give a star ⭐️

Feel free to give a star to this library if you like it.
