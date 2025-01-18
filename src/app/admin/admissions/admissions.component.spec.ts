import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsComponent } from './admissions.component';

describe('AdmissionsComponent', () => {
  let component: AdmissionsComponent;
  let fixture: ComponentFixture<AdmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionsComponent]
    });
    fixture = TestBed.createComponent(AdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
