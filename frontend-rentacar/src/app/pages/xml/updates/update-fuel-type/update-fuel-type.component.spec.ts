import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuelTypeComponent } from './update-fuel-type.component';

describe('UpdateFuelTypeComponent', () => {
  let component: UpdateFuelTypeComponent;
  let fixture: ComponentFixture<UpdateFuelTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFuelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
