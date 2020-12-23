import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarClassComponent } from './add-car-class.component';

describe('AddCarClassComponent', () => {
  let component: AddCarClassComponent;
  let fixture: ComponentFixture<AddCarClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
