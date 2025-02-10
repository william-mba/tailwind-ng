import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsComponent } from './dialogs.component';

describe('DialogsComponent', () => {
  let component: DialogsComponent;
  let fixture: ComponentFixture<DialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
