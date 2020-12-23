import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGearshiftTypeComponent } from './update-gearshift-type.component';

describe('UpdateGearshiftTypeComponent', () => {
  let component: UpdateGearshiftTypeComponent;
  let fixture: ComponentFixture<UpdateGearshiftTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGearshiftTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGearshiftTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
