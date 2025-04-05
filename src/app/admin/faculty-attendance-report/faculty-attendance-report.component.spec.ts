import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAttendanceReportComponent } from './faculty-attendance-report.component';

describe('FacultyAttendanceReportComponent', () => {
  let component: FacultyAttendanceReportComponent;
  let fixture: ComponentFixture<FacultyAttendanceReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyAttendanceReportComponent]
    });
    fixture = TestBed.createComponent(FacultyAttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
