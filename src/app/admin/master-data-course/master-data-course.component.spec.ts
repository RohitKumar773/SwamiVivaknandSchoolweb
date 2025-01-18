import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataCourseComponent } from './master-data-course.component';

describe('MasterDataCourseComponent', () => {
  let component: MasterDataCourseComponent;
  let fixture: ComponentFixture<MasterDataCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDataCourseComponent]
    });
    fixture = TestBed.createComponent(MasterDataCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
