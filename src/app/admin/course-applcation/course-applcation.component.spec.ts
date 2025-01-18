import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseApplcationComponent } from './course-applcation.component';

describe('CourseApplcationComponent', () => {
  let component: CourseApplcationComponent;
  let fixture: ComponentFixture<CourseApplcationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseApplcationComponent]
    });
    fixture = TestBed.createComponent(CourseApplcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
