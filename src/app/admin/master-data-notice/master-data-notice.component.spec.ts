import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataNoticeComponent } from './master-data-notice.component';

describe('MasterDataNoticeComponent', () => {
  let component: MasterDataNoticeComponent;
  let fixture: ComponentFixture<MasterDataNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataNoticeComponent]
    });
    fixture = TestBed.createComponent(MasterDataNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
