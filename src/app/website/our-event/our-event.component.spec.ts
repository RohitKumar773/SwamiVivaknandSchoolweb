import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEventComponent } from './our-event.component';

describe('OurEventComponent', () => {
  let component: OurEventComponent;
  let fixture: ComponentFixture<OurEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurEventComponent]
    });
    fixture = TestBed.createComponent(OurEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
