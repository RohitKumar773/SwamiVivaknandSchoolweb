import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationViewComponent } from './registration-view.component';

describe('RegistrationViewComponent', () => {
  let component: RegistrationViewComponent;
  let fixture: ComponentFixture<RegistrationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationViewComponent]
    });
    fixture = TestBed.createComponent(RegistrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
