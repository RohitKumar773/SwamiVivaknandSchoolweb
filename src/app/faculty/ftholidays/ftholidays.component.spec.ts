import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtholidaysComponent } from './ftholidays.component';

describe('FtholidaysComponent', () => {
  let component: FtholidaysComponent;
  let fixture: ComponentFixture<FtholidaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtholidaysComponent]
    });
    fixture = TestBed.createComponent(FtholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
