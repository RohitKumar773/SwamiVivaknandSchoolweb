import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleTimingComponent } from './class-schedule-timing.component';

describe('ClassScheduleTimingComponent', () => {
  let component: ClassScheduleTimingComponent;
  let fixture: ComponentFixture<ClassScheduleTimingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassScheduleTimingComponent]
    });
    fixture = TestBed.createComponent(ClassScheduleTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
