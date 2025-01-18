import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDashboardComponent } from './faculty-dashboard.component';

describe('FacultyDashboardComponent', () => {
  let component: FacultyDashboardComponent;
  let fixture: ComponentFixture<FacultyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyDashboardComponent]
    });
    fixture = TestBed.createComponent(FacultyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
