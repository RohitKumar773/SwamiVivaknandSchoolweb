import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportZoneComponent } from './transport-zone.component';

describe('TransportZoneComponent', () => {
  let component: TransportZoneComponent;
  let fixture: ComponentFixture<TransportZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportZoneComponent]
    });
    fixture = TestBed.createComponent(TransportZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
