import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFormComponent } from './assignment-form.component';

describe('AssignmentFormComponent', () => {
  let component: AssignmentFormComponent;
  let fixture: ComponentFixture<AssignmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentFormComponent]
    });
    fixture = TestBed.createComponent(AssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
