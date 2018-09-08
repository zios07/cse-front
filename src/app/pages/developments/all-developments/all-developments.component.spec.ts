import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDevelopmentsComponent } from './all-developments.component';

describe('AllDevelopmentsComponent', () => {
  let component: AllDevelopmentsComponent;
  let fixture: ComponentFixture<AllDevelopmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDevelopmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
