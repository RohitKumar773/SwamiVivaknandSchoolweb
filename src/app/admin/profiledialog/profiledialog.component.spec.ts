import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledialogComponent } from './profiledialog.component';

describe('ProfiledialogComponent', () => {
  let component: ProfiledialogComponent;
  let fixture: ComponentFixture<ProfiledialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfiledialogComponent]
    });
    fixture = TestBed.createComponent(ProfiledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
