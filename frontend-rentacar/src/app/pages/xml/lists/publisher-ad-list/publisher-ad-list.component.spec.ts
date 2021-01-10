import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAdListComponent } from './publisher-ad-list.component';

describe('PublisherAdListComponent', () => {
  let component: PublisherAdListComponent;
  let fixture: ComponentFixture<PublisherAdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherAdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
