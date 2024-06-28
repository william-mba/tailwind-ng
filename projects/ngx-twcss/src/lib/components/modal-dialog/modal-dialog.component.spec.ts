import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDialog } from './modal-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalDialogComponent', () => {
  let component: ModalDialog;
  let fixture: ComponentFixture<ModalDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialog, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
