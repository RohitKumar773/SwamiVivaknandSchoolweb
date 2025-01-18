import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyHomePageComponent } from './faculty-home-page.component';

describe('FacultyHomePageComponent', () => {
  let component: FacultyHomePageComponent;
  let fixture: ComponentFixture<FacultyHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyHomePageComponent]
    });
    fixture = TestBed.createComponent(FacultyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
