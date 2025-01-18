import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTestsComponent } from './exam-tests.component';

describe('ExamTestsComponent', () => {
  let component: ExamTestsComponent;
  let fixture: ComponentFixture<ExamTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamTestsComponent]
    });
    fixture = TestBed.createComponent(ExamTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
