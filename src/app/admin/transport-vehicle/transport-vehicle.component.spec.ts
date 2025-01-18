import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportVehicleComponent } from './transport-vehicle.component';

describe('TransportVehicleComponent', () => {
  let component: TransportVehicleComponent;
  let fixture: ComponentFixture<TransportVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportVehicleComponent]
    });
    fixture = TestBed.createComponent(TransportVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
