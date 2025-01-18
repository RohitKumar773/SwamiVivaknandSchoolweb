import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesFormComponent } from './faculties-form.component';

describe('FacultiesFormComponent', () => {
  let component: FacultiesFormComponent;
  let fixture: ComponentFixture<FacultiesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultiesFormComponent]
    });
    fixture = TestBed.createComponent(FacultiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
