import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmastersubjectComponent } from './addmastersubject.component';

describe('AddmastersubjectComponent', () => {
  let component: AddmastersubjectComponent;
  let fixture: ComponentFixture<AddmastersubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmastersubjectComponent]
    });
    fixture = TestBed.createComponent(AddmastersubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
