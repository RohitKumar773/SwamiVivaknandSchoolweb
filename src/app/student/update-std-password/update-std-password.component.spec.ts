import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStdPasswordComponent } from './update-std-password.component';

describe('UpdateStdPasswordComponent', () => {
  let component: UpdateStdPasswordComponent;
  let fixture: ComponentFixture<UpdateStdPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStdPasswordComponent]
    });
    fixture = TestBed.createComponent(UpdateStdPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
