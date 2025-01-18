import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesComponent } from './faculties.component';

describe('FacultiesComponent', () => {
  let component: FacultiesComponent;
  let fixture: ComponentFixture<FacultiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultiesComponent]
    });
    fixture = TestBed.createComponent(FacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
