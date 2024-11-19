import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customization',
  template: `<div id="customizations" class="h-16"></div>
    <tw-h3> Customization </tw-h3>
    <div>
      <p>
        Here is how you can apply customizations to suit your needs:
      </p>
      <ul class="*:mt-8 pl-3 list-decimal list-inside">
        <li *ngIf="html_template_customization">
          Via the HTML <app-code>class</app-code> attribute
          <highlight [code]="html_template_customization" />
        </li>
        <li *ngIf="component_instance_customization">
          Via the component's <app-code>ClassList</app-code> instance
          <highlight [code]="component_instance_customization" />
        </li>
        <li *ngIf="config_provider_customization">
          Via the component's config provider
          <highlight [code]="config_provider_customization" />
          For NgModule based applications, the steps are the same as above.
        </li>
        <li *ngIf="config_manager_customization">
          Via the reactive config manager
          <highlight [code]="config_manager_customization" />
          When using the Configuration Manager, the component set a brand new class list when it configuration changes.
        </li>
      </ul>
    </div>
    <div>
      <tw-h4 class="mt-8"> Configuration precedence </tw-h4>
        <div class="my-3">
          <app-code class="hidden sm:block">Component's Classlist instance => Reactive Config Manager => HTML class attribute => Config provider</app-code>
          <p class="mt-3 text-gray-600 dark:text-gray-400">
            Style applied using the component's Classlist instance has the highest precedence over style applied using the reactive config manager, the HTML class attribute and the component's config provider (which has the lowest precedence).
          </p>
        </div>
    </div>`,
})
export class CustomizationComponent {
  @Input('html') html_template_customization!: string;
  @Input('manager') config_manager_customization!: string;
  @Input('component') component_instance_customization!: string;
  @Input('provider') config_provider_customization!: string;
}
