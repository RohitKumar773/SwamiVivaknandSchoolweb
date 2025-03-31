import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlocateHostalComponent } from './add-alocate-hostal.component';

describe('AddAlocateHostalComponent', () => {
  let component: AddAlocateHostalComponent;
  let fixture: ComponentFixture<AddAlocateHostalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlocateHostalComponent]
    });
    fixture = TestBed.createComponent(AddAlocateHostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
