import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleDayComponent } from './class-schedule-day.component';

describe('ClassScheduleDayComponent', () => {
  let component: ClassScheduleDayComponent;
  let fixture: ComponentFixture<ClassScheduleDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassScheduleDayComponent]
    });
    fixture = TestBed.createComponent(ClassScheduleDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
