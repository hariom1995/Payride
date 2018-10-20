import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverHomeProfileComponent } from './driver-home-profile.component';

describe('DriverHomeProfileComponent', () => {
  let component: DriverHomeProfileComponent;
  let fixture: ComponentFixture<DriverHomeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverHomeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
