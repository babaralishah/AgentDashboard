import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoriesComponent } from './add-inventories.component';

describe('AddInventoriesComponent', () => {
  let component: AddInventoriesComponent;
  let fixture: ComponentFixture<AddInventoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
