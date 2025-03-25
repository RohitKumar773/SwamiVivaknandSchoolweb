import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdProductComponent } from './add-std-product.component';

describe('AddStdProductComponent', () => {
  let component: AddStdProductComponent;
  let fixture: ComponentFixture<AddStdProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStdProductComponent]
    });
    fixture = TestBed.createComponent(AddStdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
