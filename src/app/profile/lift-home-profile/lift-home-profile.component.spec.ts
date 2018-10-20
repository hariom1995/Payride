import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftHomeProfileComponent } from './lift-home-profile.component';

describe('LiftHomeProfileComponent', () => {
  let component: LiftHomeProfileComponent;
  let fixture: ComponentFixture<LiftHomeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftHomeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
