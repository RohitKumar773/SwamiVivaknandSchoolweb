import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesComponent } from './student-fees.component';

describe('StudentFeesComponent', () => {
  let component: StudentFeesComponent;
  let fixture: ComponentFixture<StudentFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFeesComponent]
    });
    fixture = TestBed.createComponent(StudentFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
