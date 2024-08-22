import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { TOGGLE_CONFIG } from './toggle.config';

@Component({
  selector: 'tw-toggle',
  standalone: true,
  imports: [],
  host: {
    role: 'switch',
    '(click)': 'toggle()',
    '[class]': 'class'
  },
  template: `
  <input #twToggleInput type="checkbox" class="checkbox" [checked]="checked">
  <span aria-hidden="true" [class]="slider" [@slide]="checked? 'on': 'off'"><ng-content/></span>
  `,
  styles: [`
    .checkbox {
      opacity: 0;
      width: 0;
    }
  `],
  animations: [
    trigger('slide', [
      state('on', style({ transform: 'translateX(1.25rem)' })),
      state('off', style({ transform: 'translateX(0)' })),
      transition('on <=> off', [animate('200ms ease-in-out')])
    ])
  ]
})
export class Toggle implements OnInit {
  @Input() checked: boolean = false;
  @Input() class!: string;
  @Input() slider!: string;
  /**
   * The matching strategy to be use to resolve the class name.
   * @usage 'first' the first part of the class name is used as prefix.
   * @usage 'last' the last part is used as suffix (including the first part).
   * @usage 'exact' the class name is used as is.
   * @default 'exact'
   */
  @Input() match: 'first' | 'last' | 'exact' = 'exact';
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('twToggleInput') input!: ElementRef<HTMLInputElement>;
  private config = inject(TOGGLE_CONFIG);

  ngOnInit(): void {
    this.slider = mergeClassNames(toClassNames(this.config.slider), this.slider);
    this.class = mergeClassNames(toClassNames(this.config.container),  this.class, this.match);
  }

  toggle(): void {
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.input.nativeElement.focus();
  }
}
