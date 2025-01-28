import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent, ButtonGroupComponent, IconDirective } from 'tailwind-ng';
import { ReactiveConfig, ThemeHelper } from "@tailwind-ng/core";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ButtonComponent, IconDirective, ButtonGroupComponent, NgIf],
  templateUrl: './main.component.html',
  styles: ``,
  providers: [ReactiveConfig]
})
export class MainComponent implements OnInit {
  protected readonly theme = ThemeHelper;
  private config = inject(ReactiveConfig);
  ngOnInit(): void {
    this.config
      .update('Button', {
        secondary: {
          boxShadow: 'shadow-none',
          hover: {
            bgColor: 'hover:bg-indigo-100/30',
            dark: {
              bgColor: 'hover:dark:bg-indigo-900/30'
            }
          },
          active: {
            bgColor: 'active:bg-indigo-100/60',
            dark: {
              bgColor: 'active:dark:bg-indigo-900/60'
            }
          }
        }
      })
      .update('ButtonGroup', {
        radius: 'rounded-full',
        padding: 'p-1',
        alignItems: 'items-center',
        ringColor: 'ring-indigo-300/60',
        bgColor: 'bg-indigo-50/5',
        dark: {
          bgColor: 'dark:bg-indigo-950/5',
          ringColor: 'dark:ring-indigo-900'
        },
        child: {
          radius: '*:rounded-full',
          bgColor: '*:bg-transparent',
          dark: {
            bgColor: '*:dark:bg-transparent'
          },
          height: '*:h-8',
        }
      });
  }
  switchTheme() {
    this.theme.toggle();
  }
}
