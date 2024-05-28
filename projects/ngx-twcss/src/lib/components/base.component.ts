import { IsAcceptableClass } from "../common/helpers/type.helper";

/**@package ngx-twcss */
export abstract class BaseComponent {

  protected size!: SizeVariant;
  protected style: string[] = [];
  protected className: string = '';

  hasClassName(className: string): boolean {
    return (this.className.search(className) === 0);
  }

  addClass(...args: string[]): void {
    args.forEach(c => {
      if (!IsAcceptableClass(c)) return

      if (!this.hasClassName(`/${c}/`)) {
        this.style.push(c)
      }
    })
  }

  removeClass(...args: string[]): void {
    args.forEach(classToRemove => {
      this.style = this.style
        .filter((c) => c !== classToRemove)
    })
  }
}

export type SizeVariant = 'sm' | 'md' | 'lg';
