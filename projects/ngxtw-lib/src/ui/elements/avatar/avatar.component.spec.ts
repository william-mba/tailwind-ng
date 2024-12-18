import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { provideAvatarConfig } from './avatar.config';
import { ElementRef } from '@angular/core';

describe('Avatar Component', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  const CUSTOM_CLASSNAMES = 'size-6 ring-2 ring-white';

  beforeEach(async () => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
