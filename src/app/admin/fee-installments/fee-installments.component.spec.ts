import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeInstallmentsComponent } from './fee-installments.component';

describe('FeeInstallmentsComponent', () => {
  let component: FeeInstallmentsComponent;
  let fixture: ComponentFixture<FeeInstallmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeeInstallmentsComponent]
    });
    fixture = TestBed.createComponent(FeeInstallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
