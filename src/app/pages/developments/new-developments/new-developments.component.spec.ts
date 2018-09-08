import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevelopmentsComponent } from './new-developments.component';

describe('NewDevelopmentsComponent', () => {
  let component: NewDevelopmentsComponent;
  let fixture: ComponentFixture<NewDevelopmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDevelopmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
