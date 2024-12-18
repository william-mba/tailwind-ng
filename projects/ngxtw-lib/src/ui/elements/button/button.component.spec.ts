import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SizeOption } from '../../../core/types/size-options.type';
import { ButtonComponent } from './button.component';
import { ButtonConfig, ButtonVariant, provideButtonConfig } from './button.config';
import { ReactiveConfig } from '../../../config/reactive-config';

describe('ButtonComponent', () => {
  let config: ButtonConfig = ButtonConfig();

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ButtonComponent],
  //     providers: [provideButtonConfig()]
  //   }).compileComponents();
  // });

  it('should create', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});



