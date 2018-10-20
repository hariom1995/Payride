import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftLoginComponent } from './lift-login.component';

describe('LiftLoginComponent', () => {
  let component: LiftLoginComponent;
  let fixture: ComponentFixture<LiftLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
