import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomepageComponent } from './std-homepage.component';

describe('StdHomepageComponent', () => {
  let component: StdHomepageComponent;
  let fixture: ComponentFixture<StdHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdHomepageComponent]
    });
    fixture = TestBed.createComponent(StdHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
