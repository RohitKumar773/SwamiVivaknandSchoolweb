import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportZoneFormComponent } from './add-transport-zone-form.component';

describe('AddTransportZoneFormComponent', () => {
  let component: AddTransportZoneFormComponent;
  let fixture: ComponentFixture<AddTransportZoneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransportZoneFormComponent]
    });
    fixture = TestBed.createComponent(AddTransportZoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
