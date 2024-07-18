import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogContainer } from './modal-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalDialogComponent', () => {
  let component: DialogContainer;
  let fixture: ComponentFixture<DialogContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContainer, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
