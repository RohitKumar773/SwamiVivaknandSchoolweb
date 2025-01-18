import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataModuleComponent } from './master-data-module.component';

describe('MasterDataModuleComponent', () => {
  let component: MasterDataModuleComponent;
  let fixture: ComponentFixture<MasterDataModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataModuleComponent]
    });
    fixture = TestBed.createComponent(MasterDataModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
