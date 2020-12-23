import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarClassComponent } from './update-car-class.component';

describe('UpdateCarClassComponent', () => {
  let component: UpdateCarClassComponent;
  let fixture: ComponentFixture<UpdateCarClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
