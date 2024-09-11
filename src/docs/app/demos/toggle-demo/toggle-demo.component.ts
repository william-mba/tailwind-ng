import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-demo',
  templateUrl: './toggle-demo.component.html'
})
export class ToggleDemoComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 500);
  }
  states: Map<number, boolean> = new Map()

  toggle(item: number): void {
    this.states.set(item, !this.states.get(item));
    this.check(item);
  }

  logChanges(value: boolean): void {
    console.log('Checked: ', value);
  }

  check(item: number): boolean {
    return this.states.get(item) || false;
  }

  isCheck(value: boolean): boolean {
    return value
  }

  simpleToggle = `<tw-toggle class="transition-colors duration-200 has-[:checked]:bg-indigo-500" />`;
  withOutline = `<tw-toggle class="... has-[:focus]:ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-indigo-500 active:ring-offset-2 active:ring-2 active:ring-indigo-500" />`;
  withIcon = `<tw-toggle class="..." #twToggle>
  <tw-icon *ngIf="twToggle.checked" class="text-indigo-500" size="xs" name="check" source="googlefonts" />
  <tw-icon *ngIf="!twToggle.checked" class="text-black/30" size="xs" name="close" source="googlefonts" />
</tw-toggle>`;
  withInnerShadow = `<tw-toggle class="shadow-inner shadow-black/30 ..." />`;
  withInnerShadowAndIcon = `<tw-toggle class="shadow-inner shadow-black/30 ..." #twToggle>
  <tw-icon *ngIf="twToggle.checked" class="text-indigo-500" size="xs" name="check" source="googlefonts" />
  <tw-icon *ngIf="!twToggle.checked" class="text-black/30" size="xs" name="close" source="googlefonts" />
</tw-toggle>`;

  simpleToggle2 = `<tw-toggle slider="rounded-sm" class="rounded-sm transition-colors duration-200 has-[:checked]:bg-indigo-500" />`;
  withOutline2 = `<tw-toggle slider="rounded-sm" class="rounded-sm ... has-[:focus]:ring-offset-2 has-[:focus]:ring-2 has-[:focus]:ring-indigo-500 active:ring-offset-2 active:ring-2 active:ring-indigo-500" />`;
  withIcon2 = `<tw-toggle slider="rounded-sm" class="rounded-sm ..." #twToggle>
  <tw-icon *ngIf="twToggle.checked" class="text-indigo-500" size="xs" name="check" source="googlefonts" />
  <tw-icon *ngIf="!twToggle.checked" class="text-black/30" size="xs" name="close" source="googlefonts" />
</tw-toggle>`;
  withInnerShadow2 = `<tw-toggle slider="rounded-sm" class="rounded-sm shadow-inner shadow-black/30 ..." />`;
  withInnerShadowAndIcon2 = `<tw-toggle slider="rounded-sm" class="rounded-sm shadow-inner shadow-black/30 ..." #twToggle>
  <tw-icon *ngIf="twToggle.checked" class="text-indigo-500" size="xs" name="check" source="googlefonts" />
  <tw-icon *ngIf="!twToggle.checked" class="text-black/30" size="xs" name="close" source="googlefonts" />
</tw-toggle>`;

}
