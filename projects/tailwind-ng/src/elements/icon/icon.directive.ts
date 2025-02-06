import { Directive, Input } from '@angular/core';
import { SizeOption, IconBase, IconName, Icon, ClassList } from '@tailwind-ng/core';

@Directive({
  selector: 'tw-icon, [twIcon], [tw-icon]',
  exportAs: 'twIcon',
  host: { '[class]': 'classList.value()' },
  providers: [{ provide: IconBase, useExisting: IconDirective }]
})
export class IconDirective extends IconBase implements Icon {
  @Input() size: SizeOption = 'md';
  @Input({ required: true }) name!: IconName;

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      this.classList = new ClassList(this.class);
      this.classList.init(this.config[this.size])
        .then(() => {
          this.classList.set(this.config);
        })
        .then(() => {
          if (this.config.map) {
            if (!this.config.map[this.name]) {
              throw new Error(`Icon map does not contain the icon name: ${this.name}`);
            } else {
              this.nativeElement.innerHTML = this.config.map[this.name];
            }
          } else {
            throw new Error('Icon map must be setted.');
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    }
  }
}
