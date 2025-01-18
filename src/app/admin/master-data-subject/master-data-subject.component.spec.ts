import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataSubjectComponent } from './master-data-subject.component';

describe('MasterDataSubjectComponent', () => {
  let component: MasterDataSubjectComponent;
  let fixture: ComponentFixture<MasterDataSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataSubjectComponent]
    });
    fixture = TestBed.createComponent(MasterDataSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
