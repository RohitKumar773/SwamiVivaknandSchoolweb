import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtfeestructureComponent } from './ftfeestructure.component';

describe('FtfeestructureComponent', () => {
  let component: FtfeestructureComponent;
  let fixture: ComponentFixture<FtfeestructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtfeestructureComponent]
    });
    fixture = TestBed.createComponent(FtfeestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
