import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccntUserFormComponent } from './add-accnt-user-form.component';

describe('AddAccntUserFormComponent', () => {
  let component: AddAccntUserFormComponent;
  let fixture: ComponentFixture<AddAccntUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAccntUserFormComponent]
    });
    fixture = TestBed.createComponent(AddAccntUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
