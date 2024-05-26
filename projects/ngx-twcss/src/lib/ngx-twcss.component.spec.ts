import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTwcssComponent } from './ngx-twcss.component';

describe('NgxTwcssComponent', () => {
  let component: NgxTwcssComponent;
  let fixture: ComponentFixture<NgxTwcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTwcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTwcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
