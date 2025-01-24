import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrnsptVehicleFormComponent } from './add-trnspt-vehicle-form.component';

describe('AddTrnsptVehicleFormComponent', () => {
  let component: AddTrnsptVehicleFormComponent;
  let fixture: ComponentFixture<AddTrnsptVehicleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrnsptVehicleFormComponent]
    });
    fixture = TestBed.createComponent(AddTrnsptVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
