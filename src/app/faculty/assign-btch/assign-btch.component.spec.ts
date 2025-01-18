import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBtchComponent } from './assign-btch.component';

describe('AssignBtchComponent', () => {
  let component: AssignBtchComponent;
  let fixture: ComponentFixture<AssignBtchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignBtchComponent]
    });
    fixture = TestBed.createComponent(AssignBtchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
