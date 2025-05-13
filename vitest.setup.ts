import '@analogjs/vite-plugin-angular/setup-vitest'

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'
import { TestBed } from '@angular/core/testing'
import { ElementRef } from '@angular/core'

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting([
    {
      provide: ElementRef,
      useValue: {
        nativeElement: document.createElement('div'),
      },
    },
  ])
)
