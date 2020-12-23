import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarBrandComponent } from './update-car-brand.component';

describe('UpdateCarBrandComponent', () => {
  let component: UpdateCarBrandComponent;
  let fixture: ComponentFixture<UpdateCarBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
