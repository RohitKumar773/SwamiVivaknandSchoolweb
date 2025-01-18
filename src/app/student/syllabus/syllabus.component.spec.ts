import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusComponent } from './syllabus.component';

describe('SyllabusComponent', () => {
  let component: SyllabusComponent;
  let fixture: ComponentFixture<SyllabusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusComponent]
    });
    fixture = TestBed.createComponent(SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
