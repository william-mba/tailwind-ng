import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabComponent } from './lab.component';

describe('LabComponent', () => {
	let component: LabComponent;
	let fixture: ComponentFixture<LabComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [LabComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
