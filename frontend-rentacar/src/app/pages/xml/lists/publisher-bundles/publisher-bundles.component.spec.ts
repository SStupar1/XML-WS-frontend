import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherBundlesComponent } from './publisher-bundles.component';

describe('PublisherBundlesComponent', () => {
  let component: PublisherBundlesComponent;
  let fixture: ComponentFixture<PublisherBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
