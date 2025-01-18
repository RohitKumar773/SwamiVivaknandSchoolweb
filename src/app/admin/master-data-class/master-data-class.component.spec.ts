import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataClassComponent } from './master-data-class.component';

describe('MasterDataClassComponent', () => {
  let component: MasterDataClassComponent;
  let fixture: ComponentFixture<MasterDataClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataClassComponent]
    });
    fixture = TestBed.createComponent(MasterDataClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
