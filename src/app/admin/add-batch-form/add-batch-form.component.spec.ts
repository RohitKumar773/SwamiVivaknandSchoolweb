import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatchFormComponent } from './add-batch-form.component';

describe('AddBatchFormComponent', () => {
  let component: AddBatchFormComponent;
  let fixture: ComponentFixture<AddBatchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBatchFormComponent]
    });
    fixture = TestBed.createComponent(AddBatchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
