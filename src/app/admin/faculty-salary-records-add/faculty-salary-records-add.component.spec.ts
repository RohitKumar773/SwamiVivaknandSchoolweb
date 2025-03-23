import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySalaryRecordsAddComponent } from './faculty-salary-records-add.component';

describe('FacultySalaryRecordsAddComponent', () => {
  let component: FacultySalaryRecordsAddComponent;
  let fixture: ComponentFixture<FacultySalaryRecordsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultySalaryRecordsAddComponent]
    });
    fixture = TestBed.createComponent(FacultySalaryRecordsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
