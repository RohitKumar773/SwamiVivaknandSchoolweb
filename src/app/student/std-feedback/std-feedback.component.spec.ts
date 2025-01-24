import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFeedbackComponent } from './std-feedback.component';

describe('StdFeedbackComponent', () => {
  let component: StdFeedbackComponent;
  let fixture: ComponentFixture<StdFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdFeedbackComponent]
    });
    fixture = TestBed.createComponent(StdFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
