import { booleanAttribute, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToggleConfig } from './toggle.config';
import { Toggle } from './toggle.interface';
import { ElementBaseDirective } from '../../core/bases/element-base.directive';
import { ClassName } from '../../../../ngxtw-lib/src/lib/core/types/class-name.type';
import { ClassList } from '../../core/configs/classlist';

@Component({
  selector: 'tw-toggle, [tw-toggle], [twToggle]',
  exportAs: 'twToggle',
  standalone: true,
  host: {
    role: 'switch',
    '(click)': 'toggle()',
    '[class]': 'classList.value',
  },
  animations: [
    trigger('slide', [
      state('on', style({ transform: 'translateX(100%)' })),
      state('off', style({ transform: 'translateX(0)' })),
      transition('on <=> off', [animate('150ms ease-in-out')])
    ])
  ],
  template: `<input type="checkbox" #checkbox [checked]="checked" class="size-0 opacity-0">
  <span aria-hidden="true" [class]="sliderClassList.value" [@slide]="checked? 'on': 'off'">
    <ng-content/>
  </span>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent extends ElementBaseDirective<HTMLElement> implements Toggle {
  @ViewChild('checkbox', { static: true })
  readonly checkbox!: ElementRef<HTMLInputElement>;

  @Input({ transform: booleanAttribute }) checked: boolean = false;
  @Input() slider: ClassName[] = [];
  readonly sliderClassList: ClassList = new ClassList();
  @Output('toggle') onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  override ngOnInit(): void {
    this.sliderClassList.init(this.slider);
    super.ngOnInit();
  }

  protected override buildStyle(): void {
    this._configManager.get<ToggleConfig>('Toggle')
      .subscribe(config => {
        this.classList.setFrom(config.container);
        this.sliderClassList.setFrom(config.slider);
      });
  }

  toggle(): void {
    // Prevent toggling when disabled
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkbox.nativeElement.focus();
    this.onToggle.emit(this.checked);
  }
}
