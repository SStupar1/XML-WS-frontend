import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGearshiftTypeComponent } from './add-gearshift-type.component';

describe('AddGearshiftTypeComponent', () => {
  let component: AddGearshiftTypeComponent;
  let fixture: ComponentFixture<AddGearshiftTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGearshiftTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGearshiftTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
