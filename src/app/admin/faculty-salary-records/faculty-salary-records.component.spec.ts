import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySalaryRecordsComponent } from './faculty-salary-records.component';

describe('FacultySalaryRecordsComponent', () => {
  let component: FacultySalaryRecordsComponent;
  let fixture: ComponentFixture<FacultySalaryRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultySalaryRecordsComponent]
    });
    fixture = TestBed.createComponent(FacultySalaryRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
