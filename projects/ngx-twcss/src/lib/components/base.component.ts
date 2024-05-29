import { IsAcceptableClass } from "../common/helpers/type.helper";

/**@package ngx-twcss */
export abstract class BaseComponent {

  protected size!: SizeVariant;
  protected _style: string[] = [];
  protected className: string = '';

  get style(): string {
    return this._style.join(' ');
  }

  hasClassName(className: string): boolean {
    return (this.className.search(className) === 0);
  }

  addClass(...args: string[]): void {
    args.forEach(c => {
      if (!IsAcceptableClass(c)) return

      if (!this.hasClassName(`/${c}/`)) {
        this._style.push(c)
      }
    })
  }

  removeClass(...args: string[]): void {
    args.forEach(classToRemove => {
      this._style = this._style
        .filter((c) => c !== classToRemove)
    })
  }
}

export type SizeVariant = 'sm' | 'md' | 'lg';
