import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogDemoComponent } from './modal-dialog-demo.component';

describe('ModalDialogDemoComponent', () => {
  let component: ModalDialogDemoComponent;
  let fixture: ComponentFixture<ModalDialogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDialogDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
