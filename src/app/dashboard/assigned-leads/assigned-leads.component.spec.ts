import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLeadsComponent } from './assigned-leads.component';

describe('AssignedLeadsComponent', () => {
  let component: AssignedLeadsComponent;
  let fixture: ComponentFixture<AssignedLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedLeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
