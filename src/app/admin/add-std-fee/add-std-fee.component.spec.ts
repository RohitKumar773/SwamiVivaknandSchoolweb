import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdFeeComponent } from './add-std-fee.component';

describe('AddStdFeeComponent', () => {
  let component: AddStdFeeComponent;
  let fixture: ComponentFixture<AddStdFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStdFeeComponent]
    });
    fixture = TestBed.createComponent(AddStdFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
