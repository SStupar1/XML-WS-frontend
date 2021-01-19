import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherReservationsComponent } from './publisher-reservations.component';

describe('PublisherReservationsComponent', () => {
  let component: PublisherReservationsComponent;
  let fixture: ComponentFixture<PublisherReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
