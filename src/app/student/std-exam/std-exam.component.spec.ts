import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdExamComponent } from './std-exam.component';

describe('StdExamComponent', () => {
  let component: StdExamComponent;
  let fixture: ComponentFixture<StdExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdExamComponent]
    });
    fixture = TestBed.createComponent(StdExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
