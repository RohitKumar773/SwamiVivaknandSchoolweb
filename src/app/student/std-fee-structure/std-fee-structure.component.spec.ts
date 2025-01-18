import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFeeStructureComponent } from './std-fee-structure.component';

describe('StdFeeStructureComponent', () => {
  let component: StdFeeStructureComponent;
  let fixture: ComponentFixture<StdFeeStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdFeeStructureComponent]
    });
    fixture = TestBed.createComponent(StdFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
