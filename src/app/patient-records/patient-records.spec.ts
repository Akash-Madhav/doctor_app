import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordsComponent } from './patient-records';

describe('PatientRecords', () => {
  let component: PatientRecordsComponent;
  let fixture: ComponentFixture<PatientRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRecordsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
