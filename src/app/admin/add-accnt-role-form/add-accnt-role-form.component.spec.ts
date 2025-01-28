import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccntRoleFormComponent } from './add-accnt-role-form.component';

describe('AddAccntRoleFormComponent', () => {
  let component: AddAccntRoleFormComponent;
  let fixture: ComponentFixture<AddAccntRoleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAccntRoleFormComponent]
    });
    fixture = TestBed.createComponent(AddAccntRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
