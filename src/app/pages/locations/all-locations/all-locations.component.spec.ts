import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLocationsComponent } from './all-locations.component';

describe('AllLocationsComponent', () => {
  let component: AllLocationsComponent;
  let fixture: ComponentFixture<AllLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
