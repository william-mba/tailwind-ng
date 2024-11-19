import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-ref',
  template: `
  <div  *ngIf="withQuickStart" id="quick-start" class="my-16"></div>
    <div *ngIf="withQuickStart">
      <tw-h3>Quick start</tw-h3>
      <highlight [code]="usage" />
    </div>
    <div id="api" class="h-16"></div>
    <div>
      <tw-h3> {{ title }} </tw-h3>
      <div class="*:pe-3 *:*:*:text-wrap">
        <p>
          Selectors: <app-code>{{ selector }}</app-code>
        </p>
        <p>
          Interfaces: <app-code>{{ interface }}</app-code>
        </p>
      </div>
      <div class="grid gap-10 m-10 mb-0 mx-auto rounded-xl">
        <ng-content />
      </div>
    </div>`,
})
export class ApiRefComponent {
  @Input() usage!: string;
  @Input() selector!: string;
  @Input() interface!: string;
  @Input({transform: booleanAttribute}) withQuickStart: boolean = true;
  @Input() title: string = 'API reference';
}
