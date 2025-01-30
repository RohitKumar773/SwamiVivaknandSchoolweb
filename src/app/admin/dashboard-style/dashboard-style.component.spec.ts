import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStyleComponent } from './dashboard-style.component';

describe('DashboardStyleComponent', () => {
  let component: DashboardStyleComponent;
  let fixture: ComponentFixture<DashboardStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStyleComponent]
    });
    fixture = TestBed.createComponent(DashboardStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
