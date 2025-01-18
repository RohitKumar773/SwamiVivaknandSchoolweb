import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportDriversComponent } from './transport-drivers.component';

describe('TransportDriversComponent', () => {
  let component: TransportDriversComponent;
  let fixture: ComponentFixture<TransportDriversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportDriversComponent]
    });
    fixture = TestBed.createComponent(TransportDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
