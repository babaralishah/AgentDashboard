import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupotpComponent } from './signupotp.component';

describe('SignupotpComponent', () => {
  let component: SignupotpComponent;
  let fixture: ComponentFixture<SignupotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
