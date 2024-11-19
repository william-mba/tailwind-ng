import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRefLinksComponent } from './api-ref-links.component';

describe('ApiRefComponent', () => {
  let component: ApiRefLinksComponent;
  let fixture: ComponentFixture<ApiRefLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRefLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiRefLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
