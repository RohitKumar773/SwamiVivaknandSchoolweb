import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsComponent } from './academics.component';

describe('AcademicsComponent', () => {
  let component: AcademicsComponent;
  let fixture: ComponentFixture<AcademicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicsComponent]
    });
    fixture = TestBed.createComponent(AcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
