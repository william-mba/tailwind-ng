import { Directive, OnInit, Input } from "@angular/core";
import { mergeClassNames } from "../../../core/helpers/config.helper";

@Directive({
  standalone: true,
  selector: 'tw-badge-action, [tw-badge-action]',
  host: {
    '[class]': 'config'
  }
})
export class BadgeActionDirective implements OnInit {
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames("hover:bg-inherit hover:bg-opacity-20 size-3 cursor-pointer", this.class);
  }
}
