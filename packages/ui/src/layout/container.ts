import { Component, inject, Provider } from '@angular/core'
import { BaseDirective, classNameMerge, InjectionTokenFactory } from '@tailwind-ng/core'

@Component({
  selector: 'tw-container, twContainer, [tw-container], [twContainer]',
  template: `<ng-content />`,
}) // eslint-disable-next-line @angular-eslint/component-class-suffix
export class Container extends BaseDirective {
  protected override buildStyle(): void {
    const className = inject(CONTAINER_CONFIG)
    this.nativeElement.className = classNameMerge(className, this.class)
  }
}

const CONTAINER_CONFIG = InjectionTokenFactory.create('', 'CONTAINER_CONFIG')

export function provideContainer(customization?: string): Provider {
  const className = 'mx-auto max-w-7xl bg-gray-100 sm:px-6 lg:px-8'
  return {
    provide: CONTAINER_CONFIG,
    useValue: (customization && classNameMerge(className, customization)) || className,
  }
}

export function withContainer(customization = ''): Provider {
  return provideContainer(customization)
}
