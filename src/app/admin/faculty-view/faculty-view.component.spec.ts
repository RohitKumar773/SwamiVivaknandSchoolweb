import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewComponent } from './faculty-view.component';

describe('FacultyViewComponent', () => {
  let component: FacultyViewComponent;
  let fixture: ComponentFixture<FacultyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyViewComponent]
    });
    fixture = TestBed.createComponent(FacultyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
