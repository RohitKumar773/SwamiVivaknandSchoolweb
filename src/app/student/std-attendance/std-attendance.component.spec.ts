import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAttendanceComponent } from './std-attendance.component';

describe('StdAttendanceComponent', () => {
  let component: StdAttendanceComponent;
  let fixture: ComponentFixture<StdAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdAttendanceComponent]
    });
    fixture = TestBed.createComponent(StdAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
