import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverFormComponent } from './add-driver-form.component';

describe('AddDriverFormComponent', () => {
  let component: AddDriverFormComponent;
  let fixture: ComponentFixture<AddDriverFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDriverFormComponent]
    });
    fixture = TestBed.createComponent(AddDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
