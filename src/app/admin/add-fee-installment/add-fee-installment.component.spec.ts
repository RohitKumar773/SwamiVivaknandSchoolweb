import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeeInstallmentComponent } from './add-fee-installment.component';

describe('AddFeeInstallmentComponent', () => {
  let component: AddFeeInstallmentComponent;
  let fixture: ComponentFixture<AddFeeInstallmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFeeInstallmentComponent]
    });
    fixture = TestBed.createComponent(AddFeeInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
