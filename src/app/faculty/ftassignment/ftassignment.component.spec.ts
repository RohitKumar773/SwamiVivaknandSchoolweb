import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtassignmentComponent } from './ftassignment.component';

describe('FtassignmentComponent', () => {
  let component: FtassignmentComponent;
  let fixture: ComponentFixture<FtassignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtassignmentComponent]
    });
    fixture = TestBed.createComponent(FtassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
