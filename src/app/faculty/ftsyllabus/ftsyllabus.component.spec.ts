import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtsyllabusComponent } from './ftsyllabus.component';

describe('FtsyllabusComponent', () => {
  let component: FtsyllabusComponent;
  let fixture: ComponentFixture<FtsyllabusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtsyllabusComponent]
    });
    fixture = TestBed.createComponent(FtsyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
