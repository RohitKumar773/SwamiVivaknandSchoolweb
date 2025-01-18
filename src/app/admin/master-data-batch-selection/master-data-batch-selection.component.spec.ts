import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataBatchSelectionComponent } from './master-data-batch-selection.component';

describe('MasterDataBatchSelectionComponent', () => {
  let component: MasterDataBatchSelectionComponent;
  let fixture: ComponentFixture<MasterDataBatchSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataBatchSelectionComponent]
    });
    fixture = TestBed.createComponent(MasterDataBatchSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
