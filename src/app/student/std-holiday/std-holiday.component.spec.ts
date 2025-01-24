import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHolidayComponent } from './std-holiday.component';

describe('StdHolidayComponent', () => {
  let component: StdHolidayComponent;
  let fixture: ComponentFixture<StdHolidayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdHolidayComponent]
    });
    fixture = TestBed.createComponent(StdHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
