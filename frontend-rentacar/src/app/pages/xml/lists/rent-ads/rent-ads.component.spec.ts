import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdsComponent } from './rent-ads.component';

describe('RentAdsComponent', () => {
  let component: RentAdsComponent;
  let fixture: ComponentFixture<RentAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
