import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdListComponent } from './rent-ad-list.component';

describe('RentAdListComponent', () => {
  let component: RentAdListComponent;
  let fixture: ComponentFixture<RentAdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
