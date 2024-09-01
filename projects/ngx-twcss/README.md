
<div align="center">
  <a href="https://ngx-twcss.williammba.com/">
    <img src="./src/assets/images/ngx-twcss-logo-doc.png" alt="ngx-twcss" height="200" />
    <h1>ngx-twcss</h1>
  </a>
</div>

<div align="center">
The best way to quickly integrate <a href="https://tailwindui.com/">Tailwind CSS components</a> with <a href="https://angular.dev/">Angular</a>.
<br/>
<br/>
<br/>
</div>

## Resources

- [Roadmap](https://ngx-twcss.williammba.com/roadmap)
- [Live demo](https://stackblitz.com/~/github.com/William-Mba/ngx-twcss)
- [Components docs](https://ngx-twcss.williammba.com/)

---

## Getting started in 3 simple steps

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

### 3. Import ngx-twcss components

If your using ``standalone`` components, import the components you want from ``ngx-twcss`` in your *.component.ts file

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

If you are using ``NgModule`` based components, import the components you want from ``ngx-twcss`` in your *.module.ts file

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
[Visit our website for more details on components](https://ngx-twcss.williammba.com).

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
