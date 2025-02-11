import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultyComponent } from './add-faculty.component';

describe('AddFacultyComponent', () => {
  let component: AddFacultyComponent;
  let fixture: ComponentFixture<AddFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFacultyComponent]
    });
    fixture = TestBed.createComponent(AddFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
