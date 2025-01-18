import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHostelComponent } from './manage-hostel.component';

describe('ManageHostelComponent', () => {
  let component: ManageHostelComponent;
  let fixture: ComponentFixture<ManageHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageHostelComponent]
    });
    fixture = TestBed.createComponent(ManageHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
