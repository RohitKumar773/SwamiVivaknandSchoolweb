import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataExaminationsComponent } from './master-data-examinations.component';

describe('MasterDataExaminationsComponent', () => {
  let component: MasterDataExaminationsComponent;
  let fixture: ComponentFixture<MasterDataExaminationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataExaminationsComponent]
    });
    fixture = TestBed.createComponent(MasterDataExaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
