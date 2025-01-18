import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateHostelComponent } from './allocate-hostel.component';

describe('AllocateHostelComponent', () => {
  let component: AllocateHostelComponent;
  let fixture: ComponentFixture<AllocateHostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocateHostelComponent]
    });
    fixture = TestBed.createComponent(AllocateHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
