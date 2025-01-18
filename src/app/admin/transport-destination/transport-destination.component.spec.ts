import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportDestinationComponent } from './transport-destination.component';

describe('TransportDestinationComponent', () => {
  let component: TransportDestinationComponent;
  let fixture: ComponentFixture<TransportDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportDestinationComponent]
    });
    fixture = TestBed.createComponent(TransportDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
