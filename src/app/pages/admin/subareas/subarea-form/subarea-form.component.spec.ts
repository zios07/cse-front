import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubareaFormComponent } from './subarea-form.component';

describe('SubareaFormComponent', () => {
  let component: SubareaFormComponent;
  let fixture: ComponentFixture<SubareaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubareaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
