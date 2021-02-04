import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerslistComponent } from './dealerslist.component';

describe('DealerslistComponent', () => {
  let component: DealerslistComponent;
  let fixture: ComponentFixture<DealerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
