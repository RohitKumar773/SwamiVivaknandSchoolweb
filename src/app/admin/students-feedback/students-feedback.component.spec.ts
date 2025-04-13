import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFeedbackComponent } from './students-feedback.component';

describe('StudentsFeedbackComponent', () => {
  let component: StudentsFeedbackComponent;
  let fixture: ComponentFixture<StudentsFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsFeedbackComponent]
    });
    fixture = TestBed.createComponent(StudentsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
