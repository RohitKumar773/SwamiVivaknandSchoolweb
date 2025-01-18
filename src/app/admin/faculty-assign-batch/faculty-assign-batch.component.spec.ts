import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAssignBatchComponent } from './faculty-assign-batch.component';

describe('FacultyAssignBatchComponent', () => {
  let component: FacultyAssignBatchComponent;
  let fixture: ComponentFixture<FacultyAssignBatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyAssignBatchComponent]
    });
    fixture = TestBed.createComponent(FacultyAssignBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
