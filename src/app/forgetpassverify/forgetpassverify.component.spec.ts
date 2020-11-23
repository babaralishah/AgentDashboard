import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpassverifyComponent } from './forgetpassverify.component';

describe('ForgetpassverifyComponent', () => {
  let component: ForgetpassverifyComponent;
  let fixture: ComponentFixture<ForgetpassverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpassverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpassverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
